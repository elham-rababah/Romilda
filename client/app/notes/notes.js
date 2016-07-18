angular.module('Memories.notes',[])
.controller('NotesController',function( $scope , Notes ) {
	$scope.Notes={};
	var save=function(){
		var value=$scope.memo;
		Notes.saveMemo(value)
		.then(function(resp){
			resp.data=$scope.memo;
		})
	}
});