angular.module('Memorize.notes',[])

.controller('NotesController',function( $scope,Notes) {
	$scope.Notes={};

	$scope.save=function(){
		var value=$scope.memo;
		var val={
			memo:$scope.memo
		}
		Notes.saveMemo(val)
		.then(function(resp){
			resp.data=val;
			console.log(resp.data);
		})
	};

	Notes.getNotes().then(function(data){
		$scope.Notes.data=data;
	});
});