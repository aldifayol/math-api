const createServer = require('./createServer');
const MathBasic = require('./MathBasic');

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
});
