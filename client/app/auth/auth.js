angular.module('Memorize.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};

  $scope.signin = function () {
    Auth.signin($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.memorize', token);
        console.log("changed again");
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
      .then(function (token) {
       $window.localStorage.setItem('com.memorize', token);
       console.log($scope.user);
        $location.path('/notes');
      })
      .catch(function (error) {
        console.log(error);
      });
  };
});
