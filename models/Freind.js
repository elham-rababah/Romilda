var db =require('../db/config')
var Freind=db.Model.extend({
	tableName:'Freinds'
})
 module.exports=Freind