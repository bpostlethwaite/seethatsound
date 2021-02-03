var buckets = new WeakMap();
var synStack = [];

// ******************

export function SynHook(fn, opts = {}) {
  synf.reset = reset;

  const {delayEffectStack = false} = opts;

  // ******************
  function synf(...args) {
    synStack.push(synf);
    var bucket = getCurrentBucket();

    bucket.nextStateSlotIdx = 0;
    bucket.nextEffectIdx = 0;
    bucket.nextMemoizationIdx = 0;
    bucket.currentNode = null;

    try {
      return fn.apply(this, args);
    } finally {
      // run (cleanups and) effects, if any
      try {
        if (delayEffectStack && synStack.length > 0) {
          transferEffects(bucket, getRootBucket());
        } else {
          runEffects(bucket);
        }
      } finally {
        synStack.pop();
      }
    }
  }

  function transferEffects(fromBucket, toBucket) {
    toBucket.effects = fromBucket.effects.concat(toBucket.effects);
  }

  function runEffects(bucket) {
    for (let [idx, [effect, guards]] of bucket.effects.entries()) {
      try {
        if (typeof effect == "function") {
          effect();
        }
      } finally {
        bucket.effects[idx][0] = undefined;
      }
    }
  }

  function reset() {
    synStack.push(synf);
    var bucket = getCurrentBucket();
    try {
      // run all pending cleanups
      for (let cleanup of bucket.cleanups) {
        if (typeof cleanup == "function") {
          cleanup();
        }
      }
    } finally {
      synStack.pop();
      bucket.stateSlots.length = 0;
      bucket.effects.length = 0;
      bucket.cleanups.length = 0;
      bucket.memoizations.length = 0;
      bucket.events.length = 0;
      bucket.nextStateSlotIdx = 0;
      bucket.nextEffectIdx = 0;
      bucket.nextMemoizationIdx = 0;
      bucket.currentNode = null;
    }
  }

  return synf;
}

function getCurrentBucket() {
  if (synStack.length > 0) {
    let synf = synStack[synStack.length - 1];
    let bucket;
    if (!buckets.has(synf)) {
      bucket = {
        nextStateSlotIdx: 0,
        nextEffectIdx: 0,
        nextMemoizationIdx: 0,
        stateSlots: [],
        effects: [],
        cleanups: [],
        memoizations: [],
        events: [],
        currentNode: null,
      };
      buckets.set(synf, bucket);
    }

    return buckets.get(synf);
  }
}

function getRootBucket() {
  let synf = synStack[0];
  if (!buckets.has(synf)) {
    throw new Error(
      "SynHook Invariant Error - Expected root synf bucket to exist"
    );
  }
  return buckets.get(synf);
}

export function useNode() {
  var bucket = getCurrentBucket();
  if (bucket) {
    return [
      bucket.currentNode,
      function setNode(node) {
        if (typeof node === "function") {
          bucket.currentNode = node(bucket.currentNode);
        } else {
          bucket.currentNode = node;
        }
      },
    ];
  } else {
    throw new Error(
      "usenode() only valid inside an Articulated Function or a Custom Hook."
    );
  }
}

/*
 * TODO get rid of currentNode.ref.event logic
 * That should be handled by Weact not the hook machinery
 */
export function useEvent(name, fn, ...guards) {
  //const guards = [name, fn];
  // passed in any guards?
  if (guards.length > 0) {
    // only passed a single guards list?
    if (guards.length == 1 && Array.isArray(guards[0])) {
      guards = guards[0];
    }
  }
  // no guards passed
  // NOTE: different handling than an empty guards list like []
  else {
    guards = undefined;
  }

  var bucket = getCurrentBucket();
  if (bucket && bucket.currentNode) {
    // need to create this effect-slot for this bucket?
    const thisNode = bucket.currentNode;

    if (!(bucket.nextEffectIdx in bucket.effects)) {
      bucket.effects[bucket.nextEffectIdx] = [];
    }

    let effectIdx = bucket.nextEffectIdx;
    let effect = bucket.effects[effectIdx];

    // check guards?
    if (guardsChanged(effect[1], guards)) {
      // define effect handler
      effect[0] = function effect() {
        // run a previous cleanup first?
        if (typeof bucket.cleanups[effectIdx] == "function") {
          try {
            bucket.cleanups[effectIdx]();
          } finally {
            bucket.cleanups[effectIdx] = undefined;
          }
        }

        const handler = (event) => {
          bucket.events.push(event);
          thisNode.event = true;
        };

        // only invoke effect handler if event present
        thisNode.ref.addEventListener(name, handler);

        // save clean ups
        bucket.cleanups[effectIdx] = () => {
          thisNode.ref.removeEventListener(name, handler);
        };
      };
      effect[1] = guards;
    }

    // invoke the effect itself
    let event;
    for (let i = 0; i < bucket.events.length; i++) {
      if (bucket.events[i].type === name) {
        event = bucket.events.splice(i, 1)[0];
      }
    }
    if (event) {
      fn(event);
      if (!bucket.events.length) {
        thisNode.event = false;
      }
    }

    bucket.nextEffectIdx++;
  } else {
    throw new Error(
      "usenode() only valid inside an Articulated Function or " +
        "a Custom Hook with setNode applied"
    );
  }
}

export function useState(initialVal) {
  var bucket = getCurrentBucket();
  if (bucket) {
    return useReducer(function reducer(prevVal, vOrFn) {
      return typeof vOrFn == "function" ? vOrFn(prevVal) : vOrFn;
    }, initialVal);
  } else {
    throw new Error(
      "useState() only valid inside an Articulated Function or a Custom Hook."
    );
  }
}

export function useReducer(reducerFn, initialVal, ...initialReduction) {
  var bucket = getCurrentBucket();
  if (bucket) {
    const thisNode = bucket.currentNode;

    // need to create this state-slot for this bucket?
    if (!(bucket.nextStateSlotIdx in bucket.stateSlots)) {
      let slot = [
        typeof initialVal == "function" ? initialVal() : initialVal,
        function updateSlot(v) {
          const prevVal = slot[0];
          slot[0] = reducerFn(prevVal, v);

          // if (bucket.stack && bucket.stack.length) {
          //   bucket.stack[bucket.nextStackIdx - 1].setState = true;
          // }
          if (thisNode && slot[0] !== prevVal) {
            thisNode.stateSet = true;
          }
        },
      ];
      bucket.stateSlots[bucket.nextStateSlotIdx] = slot;

      // run the reducer initially?
      if (initialReduction.length > 0) {
        bucket.stateSlots[bucket.nextStateSlotIdx][1](initialReduction[0]);
      }
    }

    return [...bucket.stateSlots[bucket.nextStateSlotIdx++]];
  } else {
    throw new Error(
      "useReducer() only valid inside an Articulated Function or a Custom Hook."
    );
  }
}

// NOTE: both `guards1` and `guards2` are either
//    `undefined` or an array
function guardsChanged(guards1, guards2) {
  // either guards list not set?
  if (guards1 === undefined || guards2 === undefined) {
    // force assumption of change in guards
    return true;
  }

  // guards lists of different length?
  if (guards1.length !== guards2.length) {
    // guards changed
    return true;
  }

  // check guards lists for differences
  //    (only shallow value comparisons)
  for (let [idx, guard] of guards1.entries()) {
    if (!Object.is(guard, guards2[idx])) {
      // guards changed
      return true;
    }
  }

  // assume no change in guards
  return false;
}

export function useEffect(fn, ...guards) {
  // passed in any guards?
  if (guards.length > 0) {
    // only passed a single guards list?
    if (guards.length == 1 && Array.isArray(guards[0])) {
      guards = guards[0];
    }
  }
  // no guards passed
  // NOTE: different handling than an empty guards list like []
  else {
    guards = undefined;
  }

  var bucket = getCurrentBucket();
  if (bucket) {
    // need to create this effect-slot for this bucket?
    if (!(bucket.nextEffectIdx in bucket.effects)) {
      bucket.effects[bucket.nextEffectIdx] = [];
    }

    let effectIdx = bucket.nextEffectIdx;
    let effect = bucket.effects[effectIdx];

    // check guards?
    if (guardsChanged(effect[1], guards)) {
      // define effect handler
      effect[0] = function effect() {
        // run a previous cleanup first?
        if (typeof bucket.cleanups[effectIdx] == "function") {
          try {
            bucket.cleanups[effectIdx]();
          } finally {
            bucket.cleanups[effectIdx] = undefined;
          }
        }

        // invoke the effect itself
        var ret = fn();

        // cleanup function returned, to be saved?
        if (typeof ret == "function") {
          bucket.cleanups[effectIdx] = ret;
        }
      };
      effect[1] = guards;
    }

    bucket.nextEffectIdx++;
  } else {
    throw new Error(
      "useEffect() only valid inside an Articulated Function or a Custom Hook."
    );
  }
}

export function useMemo(fn, ...inputGuards) {
  // passed in any input-guards?
  if (inputGuards.length > 0) {
    // only passed a single inputGuards list?
    if (inputGuards.length == 1 && Array.isArray(inputGuards[0])) {
      inputGuards = inputGuards[0];
    }
  }
  // no input-guards passed
  // NOTE: different handling than an empty inputGuards list like []
  else {
    // the function itself is then used as the only input-guard
    inputGuards = [fn];
  }

  var bucket = getCurrentBucket();
  if (bucket) {
    // need to create this memoization-slot for this bucket?
    if (!(bucket.nextMemoizationIdx in bucket.memoizations)) {
      bucket.memoizations[bucket.nextMemoizationIdx] = [];
    }

    let memoization = bucket.memoizations[bucket.nextMemoizationIdx];

    // check input-guards?
    if (guardsChanged(memoization[1], inputGuards)) {
      try {
        // invoke the to-be-memoized function
        memoization[0] = fn();
      } finally {
        // save the new input-guards
        memoization[1] = inputGuards;
      }
    }

    bucket.nextMemoizationIdx++;

    // return the memoized value
    return memoization[0];
  } else {
    throw new Error(
      "useMemo() only valid inside an Articulated Function or a Custom Hook."
    );
  }
}

export function useCallback(fn, ...inputGuards) {
  if (getCurrentBucket()) {
    return useMemo(function callback() {
      return fn;
    }, ...inputGuards);
  } else {
    throw new Error(
      "useCallback() only valid inside an Articulated Function or a Custom Hook."
    );
  }
}

export function useRef(initialValue) {
  if (getCurrentBucket()) {
    // create a new {} object with a `current` property,
    // save it in a state slot
    var [ref] = useState({current: initialValue});
    return ref;
  } else {
    throw new Error(
      "useRef() only valid inside an Articulated Function or a Custom Hook."
    );
  }
}
