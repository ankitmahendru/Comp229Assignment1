/*<!--     Author- Ankit Mahendru       -->
<!--     StudentID-301205519     -->
<!--     Last Updated on 26/10/2021      -->*/

var express = require('express');
const contactList = require('../model/contactList');
var router = express.Router();

var indexController = require('../controllers/index')

/* GET home page. */
router.get('/', indexController.displayHomePage);
/* GET home page. */
router.get('/home',indexController.displayHomePage);
/* GET Contacts page. */
router.get('/contact',  indexController.displayContactsPage);
/* GET About Me page. */
router.get('/about', indexController.displayAboutMePage);
/* GET Products page. */
router.get('/products', indexController.displayProductsPage);
/* GET Services page. */
router.get('/services',indexController.displayServicesPage);

router.get('/login',indexController.displayLoginPage);

router.get('/register',indexController.displayRegisterPage);

router.post('/login',indexController.performLoginPage);

router.post('/register',indexController.performRegisterPage);

router.get('/logout',indexController.performLogout);

module.exports = router;
