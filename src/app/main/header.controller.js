/*
 * 主体页面
 *
 * */
angular.module('app').controller('HeadController',function($scope,$location,beaconService,$window){
  $window.scroll(0,0);
  $scope.loginEmail = window.sessionStorage.getItem('loginEmail');
  $scope.access_token = window.sessionStorage.getItem('access_token');
  haveAccessToken($scope.access_token);
  $("body").removeClass('modal-open');
    $scope.userLogOut = function(){
      beaconService.userLogout($scope.access_token)
        .success(function(data){
          errorTip(data);
          if(data.logout_at != null){
            window.sessionStorage.removeItem('access_token');
            window.sessionStorage.removeItem('loginEmail');
            window.sessionStorage.removeItem('role');
            window.sessionStorage.removeItem('loginId');
            window.sessionStorage.removeItem('merchant_object_id');
            window.sessionStorage.removeItem('appid');
            window.sessionStorage.removeItem('member_privilege');
            window.sessionStorage.removeItem('branch_privilege');
            window.sessionStorage.removeItem('business_privilege');
            window.sessionStorage.removeItem('is_role');
            $location.path('/index');
          }
        });
    }
});
