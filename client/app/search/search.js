angular.moder('Memorize.search',[])
.controller('SearchController',function($scope,Search){
	$scope.Notes={};
	$scope.Note={};
	$scope.Friends={};
	$scope.Friend={};
	
	Search.getNotes().then(function(data){
		$scope.Notes=data;
	});

	Search.getNote().then(function(data){
		$scope.Note=data;
	});

	Search.getFriends().then(function(data){
		$scope.Friends=data;
	});

	Search.getFriend().then(function(data){
		$scope.Friend=data;
	});

});
