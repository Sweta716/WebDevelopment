var mongoose = require('mongoose');

module.exports = mongoose.model('App', {
    full_name : {type: String, require: true},
    email : {type: String, require: true},
    password : {type: String, require: true}
});