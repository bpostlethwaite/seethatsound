import mergeSlots from "../synergy/mergeSlots.js";
import {walk, hasMustache, getParts} from "../synergy/helpers.js";
import {SynHook, useNode} from "./hooks2.js";

let BINDING_ID = 0;

function newBindingId() {
  return BINDING_ID++;
}

const isPrimitive = (v) =>
  v === null || (typeof v !== "function" && typeof v !== "object");

function parseRepeatedBlock(node) {
  let each = node.getAttribute("each");
  if (!each) return null;

  let [valueIdentifier, prop] = each.split(/\s+in\s+/);
  let key = node.getAttribute("key") || "id";

  return {
    valueIdentifier,
    prop,
  };
}

function parseAttributeNode(attr, node) {
  const {name, value} = attr;
  if (hasMustache(value)) {
    return {name, parts: getParts(value, [])};
  }
  return null;
}

function isSyn(node) {
  if (node.nodeName.includes("-")) {
    const constructor = customElements.get(node.nodeName.toLowerCase());
    if (constructor && constructor.name === "Syn") {
      return true;
    }
  }
  return false;
}

function parseAttrs(parsedAttrs, props) {
  return parsedAttrs.map(({name, parts}) => {
    let newValue = parts.map((part) => {
      if (part.type === "key") {
        const paths = part.value.split(".");
        return paths.reduce((acc, curr) => acc[curr], props);
      } else {
        return part.value;
      }
    });
    if (newValue.length > 1) {
      newValue = newValue.join("");
    } else {
      newValue = newValue[0];
    }
    return {name, value: newValue};
  });
}

function updateTextNode(node, props, parts) {
  const newValue = parts.map((part) => {
    if (part.type === "key") {
      // Support {{book.title}} references
      const paths = part.value.split(".");
      return paths.reduce((acc, curr) => acc[curr], props);
    } else {
      return part.value;
    }
  });

  node.nodeValue = newValue.join("");
}

function updateElementNode(node, props, parsedAttrs) {
  const updatedAttrs = parseAttrs(parsedAttrs, props);
  updatedAttrs.forEach(({name, value}) => {
    if ([null, undefined, false].includes(value)) {
      node.removeAttribute(name);
    } else {
      if (isPrimitive(value)) {
        node.setAttribute(name, value);
      } else {
        node.removeAttribute(name);
        node[name] = value;
      }
    }
  });
}

const [ELEMENT_NODE, TEXT_NODE, EACH_NODE] = [1, 2, 3];

function parseElementNode(node) {
  let attrs = node.attributes;
  let i = attrs.length;
  const parsedAttrs = [];
  while (i--) {
    const attrInfo = parseAttributeNode(attrs[i], node);
    if (attrInfo) {
      parsedAttrs.push(attrInfo);
    }
  }

  if (parsedAttrs.length || isSyn(node)) {
    return {
      bindingId: node.bindingId,
      type: ELEMENT_NODE,
      info: parsedAttrs,
    };
  }
  return null;
}

function parseTextNode(value, node) {
  if (!hasMustache(value)) return null;

  const parts = getParts(value, []);

  return {
    bindingId: node.bindingId,
    type: TEXT_NODE,
    info: parts,
  };
}

function updateEachNode(node, props, {templateNode, eachItems}) {
  const nextSibling = templateNode.nextSibling;

  if (!Array.isArray(templateNode._each)) {
    templateNode._each = [];
  }

  templateNode._each.forEach((item) =>
    templateNode.parentNode.removeChild(item)
  );
  templateNode._each = [];
  // Add new iterator items
  eachItems.forEach((item) => {
    templateNode._each = templateNode._each.concat(Array.from(item.children));
    templateNode.parentNode.insertBefore(item, nextSibling);
  });
}

/*
 * Generate 1 update for the Each Node which will actually insert the 3 elements
 * and then N updates for each element in every Each Item
 */
function renderEachNode(node, props, {valueIdentifier, prop, templateNode}) {
  let updates = [];
  const iterator = props[prop];
  const content = node.content;
  const eachItems = [];
  iterator.forEach((val) => {
    const item = content.cloneNode(true);
    const itemBinders = bind(item);
    const itemUpdates = renderTree(itemBinders, item, {
      ...props,
      [valueIdentifier]: val,
    });
    updates = updates.concat(itemUpdates);
    eachItems.push(item);
  });

  updates.unshift({
    node,
    props,
    bindings: {
      type: EACH_NODE,
      info: {
        templateNode,
        eachItems,
      },
    },
  });

  return updates;
}

function bind(templateFragment) {
  const binders = [];

  function dispatch(node) {
    node.bindingId = newBindingId();
    switch (node.nodeType) {
      case node.TEXT_NODE: {
        const binding = parseTextNode(node.nodeValue, node);
        if (binding) binders.push(binding);
        break;
      }
      case node.ELEMENT_NODE: {
        if (node.nodeName === "TEMPLATE") {
          if (node.hasAttribute("each")) {
            const {valueIdentifier, prop} = parseRepeatedBlock(node);

            // Set a binding that will duplicate this block for each
            // item in iterator
            let prevItems = [];
            binders.push({
              bindingId: node.bindingId,
              type: EACH_NODE,
              info: {valueIdentifier, prop, templateNode: node},
            });
          }
        } else {
          const binding = parseElementNode(node);
          if (binding) binders.push(binding);
        }
        break;
      }
    }
  }
  walk(templateFragment, dispatch);

  const bindings = {};
  binders.forEach(({bindingId, type, info}) => {
    bindings[bindingId] = {type, info};
  });
  return bindings;
}

function applyUpdates({node, bindings, props}) {
  const {type, info} = bindings;
  switch (type) {
    case TEXT_NODE: {
      updateTextNode(node, props, info);
      break;
    }
    case ELEMENT_NODE: {
      updateElementNode(node, props, info);
      break;
    }
    case EACH_NODE: {
      updateEachNode(node, props, info);
      break;
    }
  }
}

function renderElementNode(node, props, parsedAttrs) {
  const updatedAttrs = parseAttrs(parsedAttrs, props);
  const updatedProps = {};
  updatedAttrs.forEach(({name}) => node.removeAttribute(name));
  updatedAttrs.forEach(({name, value}) => (updatedProps[name] = value));
  return node.setProps(updatedProps);
}

function renderTree(allBindings, comp, props) {
  let updates = [];
  walk(comp, (node) => {
    // Render Node, this will recurse into each web components setProps
    const bindings = allBindings[node.bindingId];
    if (bindings) {
      const {type, info} = bindings;
      if (node.isSyn) {
        updates = updates.concat(renderElementNode(node, props, info));
      } else if (type === EACH_NODE) {
        updates = updates.concat(renderEachNode(node, props, info));
      } else {
        updates.push({node, bindings, props});
      }
    }
  });
  return updates;
}

const nextTick = (func) => setTimeout(func, 0);

const connectedCallbacks = [];

function getCurrentConnection() {
  return {
    push(compName) {
      console.log(`pushing ${compName} onto stack`);
      connectedCallbacks.push(compName);
    },
    pop(compName) {
      console.log(`popping ${compName} off stack`);
      const actualCompName = connectedCallbacks.pop();
      if (actualCompName !== compName) {
        throw new Error(`Invariant Error: ${actualCompName} !== ${compName}`);
      }
    },
    isRoot() {
      return connectedCallbacks.length === 0;
    },
  };
}

const NODE_ROOTS = [];
window.NODE_ROOTS = NODE_ROOTS;

let currentNode = null;
function setParent(node) {
  currentNode = node;
}
// function getParent() {
//   return currentNode;
// }

function walkTree(node, callback, treeRendered) {
  treeRendered = callback(node, treeRendered);
  node.children.forEach((child) => {
    walkTree(child, callback, treeRendered);
  });
}

const Weact = {
  renderUpdateAndEffects: SynHook(
    function renderUpdateAndEffects(renderRoots) {
      let updates = [];
      for (let i = 0; i < renderRoots.length; i++) {
        const renderRoot = renderRoots[i];
        const comp = renderRoot.ref;
        updates = updates.concat(comp.setProps(comp.props));
      }
      // Update Pass
      updates.forEach(applyUpdates);
    },
    {delayEffectStack: false}
  ),
  stateAndEventPass: () => {
    const renderNodes = [];
    NODE_ROOTS.forEach((root) => {
      walkTree(root, (node, treeRendered) => {
        if (!treeRendered && (node.stateSet || node.event)) {
          renderNodes.push(node);
          node.stateSet = false;
          treeRendered = true;
        }
        return treeRendered;
      });
    });
    return renderNodes;
  },
  tick(renderRoots) {
    if (!renderRoots) {
      renderRoots = this.stateAndEventPass();
    }
    if (renderRoots.length) {
      this.renderUpdateAndEffects(renderRoots);
      renderRoots = this.stateAndEventPass();
      if (renderRoots.length) {
        nextTick(() => this.tick(renderRoots));
        return;
      }
    }
    this.isTick = false;
  },
  setTick() {
    if (!this.isTick) {
      this.isTick = true;
      nextTick(() => this.tick());
    }
  },
};

function newNode(ref) {
  return {
    ref,
    _stateSet: false,
    children: [],
    parent: null,
    set stateSet(bool) {
      this._stateSet = bool;
      if (bool) {
        Weact.setTick();
      }
    },
    get stateSet() {
      return this._stateSet;
    },
    set event(ev) {
      this._event = ev;
      if (ev) {
        Weact.setTick();
      }
    },
    get event() {
      return this._event;
    },
  };
}

const wrapRender = (fn) => {
  return SynHook(
    function wrapRender(args, node) {
      const [parentNode, setNode] = useNode();
      setNode(node);
      let ret;
      try {
        ret = fn.apply(this, args);
      } finally {
        setNode(parentNode);
        return ret;
      }
    },
    {delayEffectStack: true}
  );
};

function synDefine(compName, tmpl, renderer) {
  let bindings = [];

  renderer = wrapRender(renderer);

  const X = class extends HTMLElement {
    static name = "Syn";
    constructor() {
      super();
      this.props = {};
      this.isSyn = true;

      const dispatchEvent = this.dispatchEvent.bind(this);

      this.setProps = (props) => {
        this.props = props;

        const childProps = renderer([props, dispatchEvent], this._weactNode);

        return renderTree(bindings, this, childProps || {});
      };

      const scheduleRender = () => {
        nextTick(() => {
          this.setProps(this.props);
        });
      };
    }

    disconnectedCallback() {
      if (this._weactNode.parent) {
        const idx = this._weactNode.parent.children.indexOf(this._weactNode);
        this._weactNode.parent.children.splice(idx, 1);
      } else {
        const idx = NODE_ROOTS.indexOf(this._weactNode);
        NODE_ROOTS.splice(idx, 1);
      }
      //renderer.reset();
    }

    connectedCallback() {
      // this.props not set yet
      let parentElement = this.parentElement;
      let parentNode = null;
      while (parentElement) {
        if (parentElement.isSyn) {
          parentNode = parentElement._weactNode;
          break;
        }
        parentElement = parentElement.parentElement;
      }

      const thisNode = newNode(this);
      this._weactNode = thisNode;

      setParent(thisNode);

      try {
        const frag = tmpl.cloneNode(true);
        mergeSlots(this, frag);
        bindings = bind(frag);

        // RECURSE HERE
        this.appendChild(frag);

        // ALL CHILDREN APPENDED IN THIS TREE.
        // Executions resumes at leaf nodes
      } finally {
        if (parentNode) {
          parentNode.children.push(thisNode);
          thisNode.parent = parentNode;
        } else {
          NODE_ROOTS.push(thisNode);
        }
        // Important this kicks of the initial
        // render for a component. We dirty
        // their state.
        thisNode.stateSet = true;
        setParent(parentNode);
      }
    }
  };

  customElements.define(compName, X);
}

export default function Syn(compName) {
  let template;
  let renderer;

  return {
    template(tmpl) {
      template = tmpl;
      return this;
    },
    render(v) {
      renderer = v;
      return this;
    },
    define() {
      // TODO handle template string
      if (!template) {
        template = document.getElementById(compName);
        if (!template) {
          throw new Error(
            `Could not find template by id "${compName}".
If the template id is different from the web-component name use the Syn.template(templateNode) feature.`
          );
        }
      }

      if (!renderer) renderer = () => {};
      synDefine(compName, template.content, renderer);
    },
  };
}
