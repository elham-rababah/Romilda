var db =require('../db/config')
var Message=('../models/Message')

var Messages=new db.Collection()
//var Messages=New db.Collection()

Messages.model=Message

module.exports=Messages