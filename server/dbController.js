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
		     bcrypt.compare(password,user.get('password'),function(err,match){
		       if(match){
		          var token = jwt.encode(user, 'secret');
                  res.json({token: token});
		         }
		         else{
		          next(new Error('No user'));
		         }
	          });
	    }
 	 });
	},
	signup:function(req,res,next){

	  var username=req.body.username;
	  var pass=req.body.password;
	  var name=req.body.name;
	  var gender=req.body.gender;
	  var email=req.body.email;
	  var birthday=req.body.birthday;
	  var image=req.body.image;

	  new User({username:username}).fetch().then(function(user){
	    if(!user){
	       bcrypt.hash(pass, null, null, function(err, hash){
	        pass=hash;
	        var newUser=new User({
	          username:username,
	          password:pass,
	          email:email,
	          name:name,
	          birthday:birthday,
	          gender:gender,
	          imgurl:image
	        });
	        newUser.save().then(function(){	   
	        var token = jwt.encode(user, 'secret');
                res.json({token: token});
	  		})
	    });
	  }
	   else{
	      next(new Error('user exists'));
	    }
	  });
	},
	saveNote:function(req,res,next){
		var token=req.body.token;
		res.json({token:token})
	},
	viewNotes:function(){

	},
	addFriend:function(){

	},
	viewFriend:function(){

	}
}