/*<!--     Author- Ankit Mahendru       -->
<!--     StudentID-301205519     -->
<!--     Last Updated on 28/09/2021      -->*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
/* GET Contacts page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contacts' });
});
/* GET About Me page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Me' });
});
/* GET Products page. */
router.get('/products', function(req, res, next) {
  res.render('index', { title: 'Products' });
});
/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});
module.exports = router;
