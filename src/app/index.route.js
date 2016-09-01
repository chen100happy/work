(function () {
  'use strict';

  angular
    .module('app')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({

      debug: false,

      events: true

    });
    $stateProvider
      .state('index', {
        url: '/',
        views: {
          '': {
            templateUrl: 'app/components/user/user-login1.html'
          },
          'maingrid@login': {
            templateUrl: 'app/components/user/user-login1.html',
          }
        }
      })
      .state('test', {

        url: '/test',

        templateUrl: 'app/components/test/text.html',

        controller: ''

      });
    $urlRouterProvider.otherwise('/');
  }

})();
