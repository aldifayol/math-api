const FigureCalculator = require('./FigureCalculator');
const MathBasic = require('./MathBasic');

describe('A FigureCalculator', () => {
  it('should contain calculateRectanglePerimeter, calculateRectangleArea, calculateTrianglePerimeter, calculateTriangleArea functions', () => {
    const figureCalculator = new FigureCalculator({});

    expect(figureCalculator).toHaveProperty('calculateRectanglePerimeter');
    expect(figureCalculator).toHaveProperty('calculateRectangleArea');
    expect(figureCalculator).toHaveProperty('calculateTrianglePerimeter');
    expect(figureCalculator).toHaveProperty('calculateTriangleArea');

    expect(figureCalculator.calculateRectanglePerimeter).toBeInstanceOf(Function);
    expect(figureCalculator.calculateRectangleArea).toBeInstanceOf(Function);
    expect(figureCalculator.calculateTrianglePerimeter).toBeInstanceOf(Function);
    expect(figureCalculator.calculateTriangleArea).toBeInstanceOf(Function);
  });

  describe('A calculateRectanglePerimeter function', () => {
    it('should thrown error when not given 2 parameters', () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateRectanglePerimeter()).toThrowError();
      expect(() => figureCalculator.calculateRectanglePerimeter(1)).toThrowError();
      expect(() => figureCalculator.calculateRectanglePerimeter(1, 2, 3)).toThrowError();
    });

    it('should thrown error when given with non-number parameters', () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateRectanglePerimeter(true, {})).toThrowError();
      expect(() => figureCalculator.calculateRectanglePerimeter(null, '2')).toThrowError();
      expect(() => figureCalculator.calculateRectanglePerimeter([], {})).toThrowError();
    });

    it('should return correct value based on rectangle perimeter formula', () => {
      // arrange
      const length = 20;
      const width = 10;
      const spyAdd = jest.spyOn(MathBasic, 'add');
      const spyMultiply = jest.spyOn(MathBasic, 'multiply');
      const figureCalculator = new FigureCalculator(MathBasic);

      // action
      const result = figureCalculator.calculateRectanglePerimeter(length, width);

      // assert
      expect(result).toEqual(60); // 2 * (length + width)
      expect(spyAdd).toHaveBeenCalledWith(length, width);
      expect(spyMultiply).toHaveBeenCalledWith(2, 30); // 2 * (length + width)
    });
  });

  describe('A calculateRectangleArea function', () => {
    it('should throw error when not given 2 parameters', () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateRectangleArea()).toThrowError();
      expect(() => figureCalculator.calculateRectangleArea(1)).toThrowError();
      expect(() => figureCalculator.calculateRectangleArea(1, 2, 3)).toThrowError();
    });

    it('should throw error when given with non-number parameters', () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateRectangleArea(true, {})).toThrowError();
      expect(() => figureCalculator.calculateRectangleArea(null, '3')).toThrowError();
      expect(() => figureCalculator.calculateRectangleArea([], {})).toThrowError();
    });

    it('should return correct value based on rectangle area formula', () => {
      // arange
      const length = 20;
      const width = 10;
      const spyMultiply = jest.spyOn(MathBasic, 'multiply');
      const figureCalculator = new FigureCalculator(MathBasic);

      // action
      const result = figureCalculator.calculateRectangleArea(length, width);

      // assert
      expect(result).toEqual(200);
      expect(spyMultiply).toHaveBeenCalledWith(length, width);
    });
  });

  describe('A calculateTrianglePerimeter function', () => {
    it('should throw error when not given 3 parameters', () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateTrianglePerimeter()).toThrowError();
      expect(() => figureCalculator.calculateTrianglePerimeter(1)).toThrowError();
      expect(() => figureCalculator.calculateTrianglePerimeter(1, 2)).toThrowError();
      expect(() => figureCalculator.calculateTrianglePerimeter(1, 2, 3, 4)).toThrowError();
    });

    it('should throw error when given with not-number parameter', () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateTrianglePerimeter(true, {}, true)).toThrowError();
      expect(() => figureCalculator.calculateTrianglePerimeter(null, '2', [])).toThrowError();
      expect(() => figureCalculator.calculateTrianglePerimeter([], {}, null)).toThrowError();
    });

    it('should return value based on triangle perimeter formula', () => {
      // arrange
      const base = 12;
      const a = 6;
      const b = 8;
      const spyAdd = jest.spyOn(MathBasic, 'add');
      const figureCalculator = new FigureCalculator(MathBasic);

      // action
      const result = figureCalculator.calculateTrianglePerimeter(base, a, b);

      // assert
      expect(result).toEqual(26);
      expect(spyAdd).toHaveBeenCalledWith(a, b);
    });
  });

  describe('A calculateTriangleArea function', () => {
    it('should throw error when not given 2 parameters', () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateTriangleArea()).toThrowError();
      expect(() => figureCalculator.calculateTriangleArea(1)).toThrowError();
      expect(() => figureCalculator.calculateTriangleArea(1, 2, 3)).toThrowError();
    });

    it('should throw error when given with non-number parameters', () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateTriangleArea(true, {})).toThrowError();
      expect(() => figureCalculator.calculateTriangleArea(null, '3')).toThrowError();
      expect(() => figureCalculator.calculateTriangleArea([], {})).toThrowError();
    });

    it('should return value based on triangle area formula', () => {
      // arrange
      const base = 12;
      const height = 8;
      const spyMultiply = jest.spyOn(MathBasic, 'multiply');

      const figureCalculator = new FigureCalculator(MathBasic);

      // action
      const result = figureCalculator.calculateTriangleArea(base, height);

      // assert
      expect(result).toEqual(48);
      expect(spyMultiply).toHaveBeenCalledWith(base, height);
    });
  });
});
