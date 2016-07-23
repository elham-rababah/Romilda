var db = require('../configDB');
var bcrypt = require('bcrypt-nodejs');
var User= require('./user');
var friend= require('./friend');

var Note = db.Model.extend({
	tableName:'Notes',
	hasTimestamps:true,
	user: function() {
    	return this.belongsTo(require('./user'));
  	}
});
module.exports = Note;