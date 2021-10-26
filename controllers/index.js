/*<!--     Author- Ankit Mahendru       -->
<!--     StudentID-301205519     -->
<!--     Last Updated on 26/10/2021      -->*/

var express = require('express');
var router = express.Router();

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', { title: 'Home' });
}
module.exports.displayProductsPage = (req, res, next) => {
    res.render('index', { title: 'Products' });
}
module.exports.displayContactsPage = (req, res, next) => {
    res.render('index', { title: 'Contacts' });
}
module.exports.displayServicesPage = (req, res, next) => {
    res.render('index', { title: 'Services' });
}
module.exports.displayAboutMePage = (req, res, next) => {
    res.render('index', { title: 'About Me' });
}
module.exports.displayLoginPage = (req, res, next) => {
    res.render('index', { title: 'Login' });
}