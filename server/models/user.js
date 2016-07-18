var db = require('../configDB');
var note= require('./note');
var friend= require('./user');

var User = db.Model.extend({
  tableName:'Users',
  hasTimestamps:true,
});

module.exports = User;