angular.module('Memorize.frined', [])

.controller('frinedController', function ($scope , Friends) {
	$scope.frined={};
	$scope.sendToFrined=function(){

	}

	$scope.remove=function(){

	}
	Friends.getFriends().then(function(data){
		$scope.frined.all=data;
	})
});