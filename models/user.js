var db =require('../db/config')

var User=db.Model.extend({
	tableName:'users'

})

module.exports=User