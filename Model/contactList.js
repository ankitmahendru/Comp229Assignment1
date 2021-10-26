var mongoose = require('mongoose');

var contactModel = mongoose.Schema({
    contactName: String,
    contactPhone: String,
    contactEmail: String

},{
    collection: "book"
});

module.exports = mongoose.model('contactList', contactModel);