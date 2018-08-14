const axios = require('axios');

exports.get_news = (req, res, next) => {
	return axios
		.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=bf92a4f45a1e4e13b3bdf41f3cdb266a')
		.then(response => {
			 res.json(response.data);
		})
		.catch(err => console.log(err));
}