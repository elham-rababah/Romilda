angular.module('Memorize', [
  'Memorize.services',
  'Memorize.frined',
  'Memorize.notes',
  'Memorize.auth',
  'Memorize.search',
  'ngRoute'
])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/signin', {
      templateUrl: 'app/auth/signin.html',
      controller: 'AuthController'
    })
    .when('/signup', {
      templateUrl: 'app/auth/signup.html',
      controller: 'AuthController'
    })
    .when('/frined', {
      templateUrl: 'app/frined/frined.html',
      controller: 'frinedController'
    })
    .when('/notes', {
      templateUrl: 'app/notes/notes.html',
      controller: 'NotesController'
    })
    $httpProvider.interceptors.push('AttachTokens');
})
.factory('AttachTokens', function ($window) {
  var attach = {
    request: function (object) {
      var jwt = $window.localStorage.getItem('com.memorize');
      if (jwt) {
        object.headers['x-access-token'] = jwt;
      }
      object.headers['Allow-Control-Allow-Origin'] = '*';
      return object;
    }
  };
  return attach;
})


.run(function ($rootScope, $location, Auth) {
  $rootScope.$on('$routeChangeStart', function (evt, next, current) {
    // if (next.$$route && next.$$route.authenticate && !Auth.isAuth()) {
    //   $location.path('/signin');
    // }
  });
});
