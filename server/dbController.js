var User=require('./models/user');
var Friend=require('./models/friend');
var Note=require('./models/note');
var Users=require('./collections/users');
var Friends=require('./collections/friends');
var Notes=require('./collections/notes');
var db=require('./configDB');

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
		        }
		        else{
		          next(new Error('No user'));
		         }
	          });
	    }
 	 });
	},
	signup:function(req,res,next){
	  var user=res.body.username;
	  var pass=res.body.password;
	  new User({username:user}).fetch().then(function(user){
	    if(!user){
	      bcrypt.hash(pass, null, null, function(err, hash){
	        pass=hash;
	        var newUser=new User({
	          username:user,
	          password:pass
	        });
	        newUser.save().then(function(){
	        //util.createSession(res,req,newUser);
	  		 })
	    });
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