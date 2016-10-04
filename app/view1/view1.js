
'use strict';

 var biz = angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

biz.controller('View1Ctrl', ['$scope','$http',function($scope, $http) {
  $http.get("assets/js/fakeData.json").then(function(data){
      $scope.businessServices = data.data;
  });
}]);
