angular.module('chujingyou',[])
    .config(function($stateProvider,$urlRouterProvider){
        $stateProvider
          .state('chujingyou',{
             url:'/chujingyou',
             templateUrl:'./modules/chujingyou/chujinyou.html',
             controller:'chujingyouCtrl',
             css:'./modules/chujingyou/chujinyou.css'
          })
          .state("chujingyou.mode1",{
            url:'/medo1',
            templateUrl:"./modules/chujingyou/medo1.html",
             css:'./modules/chujingyou/chujinyou.css'
          })
           .state("chujingyou.mode2",{
            url:'/medo2',
            templateUrl:"./modules/chujingyou/medo2.html",
             css:'./modules/chujingyou/chujinyou.css'
          })
    })
    .controller('chujingyouCtrl',['$scope',function($scope){
          $scope.getback=function(){
            history.back();
          }
     }])