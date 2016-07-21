angular.module('Memorize.notes',[])

.controller('NotesController',function( $scope , Notes ) {
	$scope.Notes={};
	$scope.save=function(){
		var value=$scope.memo;
		Notes.saveMemo(value)
		.then(function(resp){
			resp.data=$scope.memo;
		})
	}

	Notes.getNotes().then(function(data){
		$scope.Notes=data;
	});
});