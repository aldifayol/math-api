class FigureCalculator {
  constructor(mathBasic) {
    this._mathBasic = mathBasic;
  }

  calculateRectanglePerimeter(...args) {
    if (args.length !== 2) {
      throw new Error('fungsi hanya menerima 2 parameter');
    }

    const [length, width] = args;

    if (typeof length !== 'number' || typeof width !== 'number') {
      throw new Error('fungsi hanya menerima parameter number');
    }

    return this._mathBasic.multiply(2, this._mathBasic.add(length, width));
  }

  calculateRectangleArea(...args) {
    if (args.length !== 2) {
      throw new Error('fungsi hanya menerima 2 parameter');
    }

    const [length, width] = args;

    if (typeof length !== 'number' || typeof width !== 'number') {
      throw new Error('fungsi hanya menerima parameter number');
    }

    return this._mathBasic.multiply(length, width);
  }

  calculateTrianglePerimeter(...args) {
    if (args.length !== 3) {
      throw new Error('fungsi hanya menerima 3 parameter');
    }

    const [base, a, b] = args;

    if (typeof base !== 'number' || typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('fungsi hanya menerima parameter number');
    }

    return this._mathBasic.add(base, this._mathBasic.add(a, b));
  }

  calculateTriangleArea(...args) {
    if (args.length !== 2) {
      throw new Error('fungsi hanya menerima 2 parameter');
    }

    const [base, height] = args;

    if (typeof base !== 'number' || typeof height !== 'number') {
      throw new Error('fungsi hanya menerima parameter number');
    }

    return this._mathBasic.multiply(0.5, this._mathBasic.multiply(base, height));
  }
}

module.exports = FigureCalculator;
