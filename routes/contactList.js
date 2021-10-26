var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");

var passport = require('passport');

var contactList = require('../model/contactList');
var contactController = require('../controllers/contactList')

//Authanticate User and Gaurd
function requireAuth(req, res, next){

    if(!req.isAuthenticated()){

        return res.redirect('/login');
    } next();

}

router.get('/',contactController.displayContactList);

router.get('/add',requireAuth,contactController.displayAddContact);

router.post('/add', requireAuth,contactController.performAddContact);

router.get('/update/:id',requireAuth,contactController.displayUpdateContact )

router.post('/update/:id',requireAuth,contactController.performUpdateContact)

router.get('/delete/:id',requireAuth,contactController.performDeleteContact)


module.exports = router;