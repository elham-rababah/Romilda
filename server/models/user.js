var db = require('../configDB');
var Note= require('./note');
var friend= require('./friend');

var User = db.Model.extend({
  tableName:'Users',
  hasTimestamps:true,
  note:function(){
		return this.hasMany(require('./note'),'username');
	}
});

module.exports = User;