const { errorHandler, logErrors } = require('../handlers');

let mockRes;
const setUpExpressMocks = () => {
  mockStatus = jest.fn();
  mockSend = jest.fn();
  mockNext = jest.fn();
  mockRes = {
    status: mockStatus,
    send: mockSend,
    next: mockNext
  };
  // for chainability
  mockStatus.mockImplementation(() => mockRes);
};
const mockError = new Error('mockError');
describe('Test handlers', () => {
  beforeAll(setUpExpressMocks);
  describe('error handler', () => {
    beforeEach(() => {
      errorHandler(mockError, {}, mockRes, {});
    });
    it('should call status with 500', () => {
      expect(mockRes.status).toBeCalledWith(500);
    });
    it(`should call send with { error: 'General exception' }`, () => {
      expect(mockRes.send).toBeCalledWith({ error: 'General exception' });
    });
  });

  describe('logErrors', () => {
    console.error = jest.fn();
    beforeEach(() => {
      logErrors(mockError, {}, mockRes, mockNext);
    });
    it('should log error stack to console.error', () => {
      expect(console.error).toBeCalledWith(mockError.stack);
    });
    it('should call next with mockError', () => {
      expect(mockNext).toBeCalledWith(mockError);
    });
  });
});
