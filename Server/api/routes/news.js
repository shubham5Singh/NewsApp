const express = require('express');
const router = express.Router();
const axios = require('axios');


//giving all the news post to the react app
router.get('/', (req, res, next) => {
	axios
		.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=bf92a4f45a1e4e13b3bdf41f3cdb266a')
		.then(response => {
			return res.json(response.data);
		})
		.catch(err => console.log(err));
});

module.exports = router;