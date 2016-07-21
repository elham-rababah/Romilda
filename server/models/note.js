var db = require('../configDB');
var bcrypt = require('bcrypt-nodejs');
var user= require('./user');
var friend= require('./friend');

var Note = db.Model.extend({
	tableName:'Notes',
	hasTimestamps:true,
});
module.exports = Note;