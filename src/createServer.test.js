const createServer = require('./createServer');
const MathBasic = require('./MathBasic');
const FigureCalculator = require('./FigureCalculator');

describe('An HTTP server', () => {
  describe('when GET /add', () => {
    it('should respond with a status code of 200 and the payload value is addition result of a and b correctly', async () => {
      // arrange
      const a = 20;
      const b = 10;
      const spyAdd = jest.spyOn(MathBasic, 'add');
      const server = createServer({ mathBasic: MathBasic });

      // action
      const response = await server.inject({
        method: 'GET',
        url: `/add/${a}/${b}`,
      });

      // assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(30);
      expect(spyAdd).toBeCalledWith(a, b);
    });
  });

  describe('when GET /subtract', () => {
    it('should respond with a status code of 200 and the payload value is subtraction result of a and b correctly', async () => {
      // arrange
      const a = 12;
      const b = 8;
      const spySubtract = jest.spyOn(MathBasic, 'subtract');
      const server = createServer({ mathBasic: MathBasic });

      // action
      const response = await server.inject({
        method: 'GET',
        url: `/subtract/${a}/${b}`,
      });

      // assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(4);
      expect(spySubtract).toBeCalledWith(a, b);
    });
  });

  describe('when GET /multiply', () => {
    it('should respond with a status code of 200 and the payload value is multiplication result of a and b correctly', async () => {
      const a = 10;
      const b = 4;
      const spyMultiply = jest.spyOn(MathBasic, 'multiply');
      const server = createServer({ mathBasic: MathBasic });

      const response = await server.inject({
        method: 'GET',
        url: `/multiply/${a}/${b}`,
      });

      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(40);
      expect(spyMultiply).toBeCalledWith(a, b);
    });
  });

  describe('when GET /divide', () => {
    it('should respond with a status code of 200 and the payload value is divission result of a and b correctly', async () => {
      const a = 42;
      const b = 14;
      const spyDivide = jest.spyOn(MathBasic, 'divide');
      const server = createServer({ mathBasic: MathBasic });

      const response = await server.inject({
        method: 'GET',
        url: `/divide/${a}/${b}`,
      });

      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(3);
      expect(spyDivide).toBeCalledWith(a, b);
    });
  });

  describe('when GET /calc/perimeter/rectangle', () => {
    it('should respond with a status code of 200 and the payload value of a correct rectangle perimeter math', async () => {
      // arrange
      const length = 10;
      const width = 14;
      const figureCalculator = new FigureCalculator(MathBasic);
      const spyCalcRectanglePerimeter = jest.spyOn(figureCalculator, 'calculateRectanglePerimeter');
      const server = createServer({ figureCalculator });

      // action
      const response = await server.inject({
        method: 'GET',
        url: `/calc/perimeter/rectangle/${length}/${width}`,
      });

      // assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(48);
      expect(spyCalcRectanglePerimeter).toBeCalledWith(length, width);
    });
  });

  describe('when GET /calc/area/rectangle', () => {
    it('should respond with a status code of 200 and the payload value of a correct triangle perimeter math', async () => {
      // arrange
      const length = 10;
      const width = 14;
      const figureCalculator = new FigureCalculator(MathBasic);
      const spyCalcRectangleArea = jest.spyOn(figureCalculator, 'calculateRectangleArea');
      const server = createServer({ figureCalculator });

      // action
      const response = await server.inject({
        method: 'GET',
        url: `/calc/area/rectangle/${length}/${width}`,
      });

      // assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(140);
      expect(spyCalcRectangleArea).toBeCalledWith(length, width);
    });
  });

  describe('when GET /calc/perimeter/triangle', () => {
    it('should respond with a status code of 200 and the payload value of a correct triangle perimeter math', async () => {
      // arrange
      const base = 15;
      const sideA = 13;
      const sideB = 14;
      const figureCalculator = new FigureCalculator(MathBasic);
      const spyCalcTrianglePerimeter = jest.spyOn(figureCalculator, 'calculateTrianglePerimeter');
      const server = createServer({ figureCalculator });

      // action
      const response = await server.inject({
        method: 'GET',
        url: `/calc/perimeter/triangle/${base}/${sideA}/${sideB}`,
      });

      // assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(42);
      expect(spyCalcTrianglePerimeter).toBeCalledWith(base, sideA, sideB);
    });
  });

  describe('when GET /calc/area/triangle', () => {
    it('should respond with a status code of 200 and the payload value of a correct triangle area math', async () => {
      // arrange
      const base = 10;
      const height = 8;
      const figureCalculator = new FigureCalculator(MathBasic);
      const spyCalcTriangleArea = jest.spyOn(figureCalculator, 'calculateTriangleArea');
      const server = createServer({ figureCalculator });

      // action
      const response = await server.inject({
        method: 'GET',
        url: `/calc/area/triangle/${base}/${height}`,
      });

      // assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(40);
      expect(spyCalcTriangleArea).toBeCalledWith(base, height);
    });
  });
});
