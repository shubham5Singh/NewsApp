const assert = require('assert');
const nock = require('nock');
const response = require('./response');
const newsRoutes =  require('../api/routes/news').router.get;


describe('Get User tests', () => {
  beforeEach(() => {
    nock('https://newsapi.org/v2/top-headlines?country=us&apiKey=bf92a4f45a1e4e13b3bdf41f3cdb266a')
      .get()
      .reply(200, response);
  });

  it('Get news list', () => {
    return newsRoutes()
      .then(response => {
        //expect an object back
        expect(typeof response).to.equal('object');

        //Test result of name, company and location for the response
        // expect(response.status).to.equal('ok');
      });
  });
});