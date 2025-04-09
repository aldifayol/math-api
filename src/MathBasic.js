const MathBasic = {
  add: (...args) => {
    if (args.length !== 2) {
      throw new Error('add function should only takes two params');
    }

    const [a, b] = args;

    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('add function only takes type number');
    }

    return a + b;
  },

  subtract: (...args) => {
    if (args.length !== 2) {
      throw new Error('add function should only takes two params');
    }

    const [a, b] = args;

    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('add function only takes type number');
    }

    return a - b;
  },

  multiply: (...args) => {
    if (args.length !== 2) {
      throw new Error('add function should only takes two params');
    }

    const [a, b] = args;

    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('add function only takes type number');
    }

    return a * b;
  },

  divide: (...args) => {
    if (args.length !== 2) {
      throw new Error('add function should only takes two params');
    }

    const [a, b] = args;

    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('add function only takes type number');
    }

    return a / b;
  },
};

module.exports = MathBasic;
