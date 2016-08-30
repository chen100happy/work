(function () {
  'use strict';

  angular
    .module('app')
    .controller('UserLoginController', UserLoginController);

  /** @ngInject */
  function UserLoginController($scope, $window, $location, beaconService) {
    $window.scroll(0, 0);
    var userLoginData = {
      "username": 'admin',
      "password": "admin"
    };
    $scope.userLoginForm = function () {
      $location.path('/test');
    };
  }
})();


