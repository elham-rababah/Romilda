angular.module('Memorize.services',[])

.factory('Notes', function($http){
	var saveMemo=function(memo){
		return $http({
			method:'POST',
			url:'/api/notes',
			data:memo
		})
		.then(function(resp){
			return resp;
		});
	};

	var getNotes=function(){
		return $http({
			method:'GET',
			url:'/api/notes'
		})
		.then(function(resp){
			return resp.data;
		});
	};

	var getNote=function(){
		return $http({
			method:'GET',
			url:'/api/notes'
		})
		.then(function(resp){
			return resp.data;
		});
	};

	return {
		saveMemo:saveMemo,
		getNotes:getNotes,
		getNote:getNote
	};
})

.factory('Friends',function($http){

	var getFriends=function(){
		return $http({
			method:'GET',
			url:'/api/friends'
		})
		.then(function(resp){
			return resp.data;
		});
	}; 
	return{
		getFriends : getFriends
	};
})

.factory('Profile',function($http){

	var showProfile=function(){
		return $http({
			method:'GET',
			url:'/api/userprofil'
		})
		.then(function(resp){
			return resp.data;
		})
	};
	return{
		showProfile : showProfile
	};
})

.factory('Auth', function ($http, $location, $window) {
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.Memorize');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.memorize');
    $location.path('/signin');
  };

  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});
