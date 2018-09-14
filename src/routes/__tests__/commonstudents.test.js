const app = require('../../app');
const server = require('supertest')(app);

describe('common students', () => {
  it('pass the test', () => {
    expect(1).toEqual(1);
  });
});
