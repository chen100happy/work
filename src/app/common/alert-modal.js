angular.module('app.alert.modal' , []).directive('alert-modal',[function(){
  return {
    restrict : 'EAMC',
    transclude : true,
    scope : {
      conf : '='
    },
    template : '<div class="modal fade" id="myAlertModel" role="dialog" aria-labelledby="gridSystemModalLabel">'+

               '<div class="modal-dialog" role="document">'+'<div class="modal-content">'+'<div class="modal-header">'+

               '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'+'<span aria-hidden="true">&times;</span></button>'+

               '<h4 class="modal-title" id="gridSystemModalLabel">提醒</h4>'+'</div>'+'<div class="modal-body" id="notify_model-content">创建成功</div>'+

               '</div>'+'</div>'+'</div>',
    replace : true,
    link : function(scope, element, attrs) {
      $('#myAlertModel').modal('show');
    }
  }
}]);
