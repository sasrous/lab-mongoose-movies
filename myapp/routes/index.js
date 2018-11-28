const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Index' });
});
router.get('/contact', function(req, res, next) {
	res.render('contact', { title: 'contact' });
});
router.get('/about', function(req, res, next) {
	res.render('about', { title: 'about' });
});
router.get('/work', function(req, res, next) {
	res.render('work', { title: 'work' });
});

module.exports = router;
