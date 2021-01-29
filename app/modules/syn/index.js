import mergeSlots from "../synergy/mergeSlots.js";
import {walk, hasMustache, getParts} from "../synergy/helpers.js";

let BINDING_ID = 0;

function newBindingId() {
  return BINDING_ID++;
}

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
  if (parsedAttrs.length) {
    return {
      bindingId: node.bindingId,
      update: (props, foundNode) => {
        const isSyn = !!node.__syn;
        parsedAttrs.forEach(({name, parts}) => {
          let newValue = parts.map((part) => {
            if (part.type === "key") {
              const paths = part.value.split(".");
              return paths.reduce((acc, curr) => acc[curr], props);
            } else {
              return part.value;
            }
          });
          node.removeAttribute(name);
          if (newValue.length > 1) {
            newValue = newValue.join("");
          } else {
            newValue = newValue[0];
          }
          if (isSyn) {
            const val = newValue;
            node.setProps((props) => {
              return {...props, [name]: newValue};
            });
          } else {
            if ([null, undefined, false].includes(newValue)) {
              node.removeAttribute(name);
            } else {
              node.setAttribute(name, newValue);
            }
          }
        });
      },
    };
  }
  return null;
}

function parseTextNode(value, node) {
  if (!hasMustache(value)) return null;

  const parts = getParts(value, []);

  return {
    bindingId: node.bindingId,
    update: (props, foundNode) => {
      const newValue = parts.map((part) => {
        if (part.type === "key") {
          // Support {{book.title}} references
          const paths = part.value.split(".");
          return paths.reduce((acc, curr) => acc[curr], props);
        } else {
          return part.value;
        }
      });

      foundNode.nodeValue = newValue.join("");
    },
  };
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
              update: (props, foundNode) => {
                const iterator = props[prop];
                const content = foundNode.content;
                const nextSibling = node.nextSibling;

                prevItems.forEach((item) => node.parentNode.removeChild(item));
                prevItems = [];
                // Add new iterator items
                iterator.forEach((val) => {
                  const item = content.cloneNode(true);
                  const itemBinders = bind(item);
                  prevItems = prevItems.concat(Array.from(item.children));
                  updateBindings(itemBinders, item, {
                    ...props,
                    [valueIdentifier]: val,
                  });
                  node.parentNode.insertBefore(item, nextSibling);
                });
              },
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
  binders.forEach(({bindingId, update}) => {
    bindings[bindingId] = update;
  });
  return bindings;
}

function updateBindings(bindings, comp, props) {
  walk(comp, (node) => {
    if (node.bindingId in bindings) {
      bindings[node.bindingId](props, node);
    }
  });
}

const nextTick = (func) => setTimeout(func, 0);

function synDefine(compName, initState, tmpl, view) {
  let bindings = [];
  let state = initState || {};

  const X = class extends HTMLElement {
    constructor() {
      super();
      this.__syn = true;

      this.setProps = (setter) => {
        let prevProps = {...this.props};
        this.props = Object.assign(view.props, setter(prevProps));
        updateBindings(bindings, this, this.props);
        view.updatedCallback && view.updatedCallback(prevProps);
      };

      if (!view.mapStateToProps) {
        view.mapStateToProps = (state) => ({...state});
      }
      const initProps = view.mapStateToProps(state);
      this.props = view.props = initProps;
      view.setState = (setter) => {
        state = setter(state);
        nextTick(() => {
          const propUpdate = view.mapStateToProps(state);
          const nextProps = Object.assign({...view.props}, propUpdate);
          this.setProps((props) => nextProps);
        });
      };
    }

    disconnectedCallback() {
      view.disconnectedCallback && view.disconnectedCallback();
    }

    connectedCallback() {
      const frag = tmpl.cloneNode(true);
      mergeSlots(this, frag);
      bindings = bind(frag);

      this.appendChild(frag);
      updateBindings(bindings, this, this.props);
      view.connectedCallback && view.connectedCallback();
    }
  };

  customElements.define(compName, X);
}

export default function Syn(compName) {
  let state = {};
  let template;
  let view = {};

  return {
    state(v) {
      state = v;
      return this;
    },

    template(tmpl) {
      template = tmpl;
      return this;
    },
    view(v) {
      view = v;
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

      synDefine(compName, state, template.content, view);
    },
  };
}
