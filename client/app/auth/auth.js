angular.module('Memorize.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};




  $scope.signin = function () {
    Auth.signin($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.memorize', token);
        $location.path('/links');
      })
      .catch(function (error) {
        console.error(error);
      });
  };






  $scope.signup = function () {
    Auth.signup($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.memorize', token);
        $location.path('/links');
      })
      .catch(function (error) {
        console.error(error);
      });
  };
});
