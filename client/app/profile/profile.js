angular.module('Memorize.profile',[])
.controller('profileController', function( $scope, Profile ) {
	$scope.profile={};

	Profile.showProfile().then(function(data){
		$scope.profile.data=data.uservalue;
		console.log($scope.profile.data);
	})
});
