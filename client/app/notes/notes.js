angular.module('Memorize.notes',[])

.controller('NotesController',function( $scope , Notes ) {
	$scope.Notes={};
	var value=$scope.memo;
	var Save=function(value){
		Notes.saveMemo(value)
		.then(function(resp){
			resp.data=$scope.memo;
		})
	}
});