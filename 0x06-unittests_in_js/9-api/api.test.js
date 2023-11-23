const request = require('request');
const { expect } = require('chai');

describe('API route test', () => {
  const API_URL = 'http://localhost:7865';

  it('should return a correct response for GET /', (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});
