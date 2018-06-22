const nock = require('nock');
const data = require('./data');
const getNews = require('../api/controllers/news').get_news;
const chai = require('chai');
const expect = require('chai').expect;

const baseURL = 'https://newsapi.org';
const path = '/v2/top-headlines?country=us';



describe('Get User tests', () => {
  beforeEach(() => {
    nock(baseURL)
      .get(path + '&apiKey=bf92a4f45a1e4e13b3bdf41f3cdb266a')
      .reply(200, data);
  });

  it('Get news list', () => {
    return getNews()
      .then(response => {
        console.log('type of' + typeof (response));
        expect(typeof data).to.equal('object');
      });
  });
});