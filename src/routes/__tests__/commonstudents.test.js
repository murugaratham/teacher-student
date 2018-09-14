const app = require('../../app');
const server = require('supertest')(app);

describe('Test common student with no ', () => {
  it('should response the GET method with 404', done => {
    server.get('/api').expect(404, done);
  });
});
