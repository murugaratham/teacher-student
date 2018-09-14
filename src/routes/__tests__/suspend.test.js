const app = require('../../app');
const server = require('supertest')(app);

describe('suspend', () => {
  it('pass the test', () => {
    expect(1).toEqual(1);
  });
});
