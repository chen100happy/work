angular.module('app.highcharts' , []).directive('highchar',[function(){
    return {
        restrict : 'EAMC',
        transclude : true,
        scope : {
            conf : '='
        },
        template : '<div style="min-width: 930px;height: 400px;margin-left: -10px;border: 1px solid #F4F5F9">'+ '</div>',
        replace : true,
        link : function(scope, element, attrs) {
            $('#container').highcharts({
                chart: {
                    type: 'line'
                },
                title: {
                    text:null
                },
                legend: {
                    layout: 'vertical',
                    align: 'left',
                    verticalAlign: 'top',
                    x: 150,
                    y: 100,
                    floating: true,
                    borderWidth: 1,
                    backgroundColor: '#FFFFFF'
                },
                xAxis: {
                },
                yAxis: {
                    title: {
                        text: '人数'
                    }
                },
                tooltip: {
                    backgroundColor: '#159EAD',
                    shared: true,
                    valueSuffix: ' units'
                },
                credits: {
                    enabled: false
                },
                plotOptions: {
                    areaspline: {
                        fillOpacity: 0.5
                    }
                },
                series: [{
                    data: []
                }]
            });
        }
    }
}]);
