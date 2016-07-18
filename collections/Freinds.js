 var db =require('../db/config')
 var Freind=require('../models/Freind')

 var Freinds=new db.Collection();

 Freinds.model=Freind;
 module.exports=Freinds;