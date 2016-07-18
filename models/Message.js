var db =require('../db/config')
var Message=db.Model.extend({
	tableName:'messeges'
})

module.exports=Message