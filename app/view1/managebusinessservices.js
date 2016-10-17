'use strict';

 var biz = angular.module('myApp.manageBusinessServices', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/managebusinessservices', {
    templateUrl: 'view1/managebusinessservices.html',
    controller: 'manageBusinessServicesCtrl'
  });
}])

// code source, the tutorial:Using AngularJS service | Reading JSON file http://blog.hfarazm.com/angularjs-service/
biz.controller('manageBusinessServicesCtrl', ['$scope','$http',function($scope, $http) {
  $http.get("assets/js/fakeData.json").then(function(response){
    $scope.businessServices = response.data;
  });
}]);
