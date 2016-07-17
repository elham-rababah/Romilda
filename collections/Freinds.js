 var db =require('../db/config')
 var Freind=require('../models/Freind')

 var Freinds=new db.Collection();

 Freinds.models=Freind;
 module.exports=Freinds;