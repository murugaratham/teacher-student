const app = require('../app');
const server = require('supertest')(app);

describe('Test the root path', () => {
  it('should response the GET method with 404', done => {
    server.get('/api').expect(404, done);
  });
});

describe('Test register path', () => {
  it('should throw error', done => {
    server.post('/api/register').expect(500, done);
  });
});
