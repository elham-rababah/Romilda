var User=require('./models/user');
var Friend=require('./models/friend');
var Note=require('./models/note');
var db=require('./configDB');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jwt-simple');

module.exports = {
	signin:function(req,res,next){
	  var username = req.body.username;
	  var password = req.body.password;

	  new User({username:username}).fetch().then(function(user){
	    if(!user){
	      next(new Error('user does not exist'));
	    }
	    else{
		      bcrypt.compare(pass,user.get('password'),function(err,match){
		        if(match){
		          //util.createSession(req,res,user);
		          var token = jwt.encode(user, 'secret');
                res.json({token: token});
		          next("done")
		         }
		         else{
		          next(new Error('No user'));
		         }
	          });
	    }
 	 });
	},
	signup:function(req,res,next){

	  var user=req.body.username;
	  var pass=req.body.password;
	  var name=req.body.name;
	  var gender=req.body.gender;
	  var email=req.body.email;
	  var birthday=req.body.birthday;
	  //var image=req.body.image;

	  new User({username:user}).fetch().then(function(user){
	    if(!user){
	      // bcrypt.hash(pass, null, null, function(err, hash){
	      //   pass=hash;
	        var newUser=new User({
	          username:user,
	          password:pass,
	          email:email,
	          name:name,
	          birthday:birthday,
	          gender:gender,
	          imgurl:"something"
	        });
	        newUser.save().then(function(){
	        //util.createSession(res,req,newUser);
	        var token = jwt.encode(user, 'secret');
                res.json({token: token});
	        console.log('saved')
	  		})
	  //  });
	  }
	   else{
	      next(new Error('user exists'));
	    }
	  });
	},
	saveNote:function(){

	},
	viewNotes:function(){

	},
	addFriend:function(){

	},
	viewFriend:function(){

	}
}