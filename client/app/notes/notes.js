angular.model('memories.notes',[])

.controller('NotesController',function( $scope , Notes ) {
	$scope.Notes={};
	
	var Save=function($scope.memo){
		Notes.saveMemo($scope.memo).then(function(resp){
			resp.data=$scope.memo;
		})
	}
});