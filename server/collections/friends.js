var db = require('../configDB');
var Friend = require('../models/friend');

var Friends = new db.Collection();

Friends.model = Friend;

module.exports = Friends;
