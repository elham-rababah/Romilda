var db = require('../configDB');
var note= require('./note');
var user= require('./user');

var friend= db.Model.extend({
	tableName:'Friends',
	hasTimestamps:true
});

module.exports = friend;