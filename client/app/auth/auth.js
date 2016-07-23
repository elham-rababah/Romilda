angular.module('Memorize.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};
  var username="";
  $scope.signin = function () {
    
    Auth.signin($scope.user)
      .then(function (data) {
        $window.localStorage.setItem('com.memorize', data.token);
        $location.path('/notes');
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  
  $scope.signup = function () {
    //ng-model does not support reading from files type, so we used this:
    $scope.user.image=document.getElementById('image').value;
    Auth.signup($scope.user)
      .then(function (data) {
       $window.localStorage.setItem('com.memorize', data.token);
        $location.path('/notes');
      })
      .catch(function (error) {
        console.log(error);
      });
  };
});