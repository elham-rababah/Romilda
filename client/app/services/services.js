angular.module('Memorize.services',[])

.factory('Notes', function($http){

	var saveMemo=function(memo){
		return $http({
			method:'POST',
			url:'api/notes',
			data:memo
		})
		.then(function(resp){
			return resp;
		});
	};

	return {
		saveMemo:saveMemo
	};
})

.factory('Search',function($http){
	var getNotes=function(){
		return $http({
			method:'GET',
			url:''
		})
		.then(function(resp){
			return resp.data;
		});
	};

	var getNote=function(){
		return $http({
			method:'GET',
			url:'/notes/notes.html'
		})
		.then(function(resp){
			return resp.data;
		});
	};

	var getFriends=function(){
		return $http({
			method:'GET',
			url:''
		})
		.then(function(resp){
			return resp.data;
		});
	};

	var getFriend=function(){
		return $http({
			method:'GET',
			url:''
		})
		.then(function(resp){
			return resp.data;
		});
	};

	return{
		getNotes : getNotes,
		getNote : getNote,
		getFriends : getFriends,
		getFriend : getFriend
	};
})

.factory('Auth', function ($http, $location, $window) {
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/auth/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/auth/signup',
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
    $window.localStorage.removeItem('com.Memorize');
    $location.path('/signin');
  };

  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});
