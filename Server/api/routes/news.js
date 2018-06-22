const express = require('express');
const router = express.Router();
const NewsController = require('../controllers/news');


//giving all the news post to the react app
router.get('/', NewsController.get_news );

module.exports = router;