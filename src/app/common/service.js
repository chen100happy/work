(function () {
  'use strict';

  angular
    .module('app')
    .service('beaconService', beaconService);

  /** @ngInject */
  function beaconService($http) {

    /*
     * 增加beacon的服务
     *
     * */
    this.getTree = function (formdata) {

      return (

        $http({

          method: 'POST',

          url: requestUrl + "/passport/login",

          headers: {'Content-Type': 'application/json'},

          data:formdata

        })

      )

    };

  }
})();
