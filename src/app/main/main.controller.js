(function () {
  'use strict';

  angular
    .module('app')
    .controller('NavController', NavController);

  /*

   * 导航

   */

  function NavController($scope, beaconService) {
    $scope.navList = [{

      'label': '设备',

      'icon': 'icon-btc',

      'url': 'deviceActed({page:1})'

    }, {

      'label': '部署',

      'icon': 'icon-globe',

      'url': 'beaconList({page:1})'

    },
      {
        'label': '推广',

        'icon': 'icon-link',

        'url': 'pageConf({page:1,type:1})'

      },
      {
        'label': '应用',

        'icon': 'icon-circle-arrow-up',

        'url': 'redMoneyHuo',
        'items': [
          {
            'label': '微信红包',

            'icon': 'icon-circle-arrow-up',

            'url': 'redMoneyHuo'

          },
          {
            'label': '微信卡券',

            'icon': 'icon-globe',

            'url': 'viewCardList'

          }
        ]
      }

      , {

        'label': '统计',

        'icon': 'icon-facetime-video',

        'url': 'dataMonitor'

      }

    ];

    $scope.role = window.sessionStorage.getItem('role');
    $scope.member_privilege = window.sessionStorage.getItem("member_privilege");
    $scope.business_privilege = window.sessionStorage.getItem('business_privilege');
    $scope.access_token = window.sessionStorage.getItem('access_token');
    $scope.is_root = window.sessionStorage.getItem('is_root');
    var liArr = $('#menuUl').children('li');
    if ($scope.role == 4) {
      //hideMenu(liArr,6);
      //hideMenu(liArr,7);
      //hideMenu(liArr,8);
      //hideMenu(liArr,10);
    }
    if ($scope.role == 5) {
      //hideMenu(liArr,10);
    }
    function hideMenu(arr, i) {
      arr[i].style.display = 'none';
    }
  }
})();
