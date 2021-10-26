var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");

var contactList = require('../model/contactList');
var contactController = require('../controllers/contactList')

router.get('/', contactController.displayContactList);

router.get('/add',contactController.displayAddContact);

router.post('/add', contactController.performAddContact);

router.get('/update/:id',contactController.displayUpdateContact )

router.post('/update/:id',contactController.performUpdateContact)

router.get('/delete/:id',contactController.performDeleteContact)


module.exports = router;