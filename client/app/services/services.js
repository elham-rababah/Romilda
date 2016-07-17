angular.module('Memories.services',[])

.factory('Notes',function($http){
	var saveMemo=function(memo){
		return $http({
			method:'POST',
			url:'',
			data:memp
		})
		.then(function(resp){
			return resp;
		});
	};
	return{
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
			url:''
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
	}
};
})