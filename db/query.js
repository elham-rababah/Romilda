query:

//sinup new user 

app.post('/signup', function(req, res){
  //console.log(req.body);
  new User({username:req.body.username}).fetch().then(function(user){
    console.log(user);
    if(!user){
      var newuser = new User({
          username: req.body.username,
          password: req.body.password,
          name:req.body.name,
          birthday:req.body.birthday,
          Gendr:req.body.Gendr
          imgurl:req.body.imgurl
          
        });
      

        newuser.save().then(function(newUser) {
          util.createSession(req,res,newUser);
        });
    }else{
      res.redirect('/login');
    }
  }) 
  


    
});


/////


// login query 

app.post('/login',function(req,res){
var username= req.body.username;
var password= req.body.password;
new User( {username:username})
  .fetch()
  .then(function(user) {
    if(!user){
      res.redirect("/login");
    }else{
      res.redirect("/");
      console.log("hguhjb");
      console.log(user);
      user.comparePassword(password,function(match){
        if(match){
             util.createSession(req,res,user);
        }else{
           res.redirect('/login')
        }
      })
    }
    //console.log(model.attributes.password);
   

  });




  //  select massegase from maseage 
app.get('/massegase',function(req,res){

  // knex('masseage').orderBy('date', 'desc').fecth().then()

  new masseage({username:username}).orderBy('date', 'desc').fecth().then(function (maseages){
     if(!maseages){
       // 
     }else {
        print massegas;
     }

  })

  }

/////// add massegase

app.post("/massegase",function(req,res){

	// massage user name my pe taket his value from ssession 
  new Masseage.set({content:body.req.content;}),


})

//////

// add friend
app.post("/addfriend",function(req,res){
     var theuser=??
     var friend=??
	// massage user name my pe taket his value from ssession

knex('Freinds').where({Firstside:theuser,Secondside:friend})
.orwhere({Firstside:theuser,Secondside:friend})
.fetch().then(function(relation){
	if(relation){

	}
	else{
		var newfriend =new friends({
  	    Firstside :Firstside,
     	Secondside:Secondside
       })

       newfriend.save().then(function(){
  	//open the new friend 
       })


   }
})


  var newfriend =new friends({
  	Firstside :Firstside,
  	Secondside:Secondside
  })

  newfriend.save().then(function(){
  	//open the new friend 
  })

})




