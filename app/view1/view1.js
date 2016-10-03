
// working code below ******************************
'use strict';

 var biz = angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

// .controller('View1Ctrl', [function() {
//
// }]);

// **********************************************************
// ***************   TEST CODE BELOW ************************
// **********************************************************


// var biz = angular.module('myApp.view1', ['ngRoute']);
//
// biz.controller('View1Ctrl', function($scope, $http) {
//   $http.get("assets/js/fakeData.json").then(function(response){
//       $scope.businessServices = response.data.records;
//   });
// });



// ************* A DIFFERENT VERSION BELOW ***************
// code source, the tutorial:Using AngularJS service | Reading JSON file http://blog.hfarazm.com/angularjs-service/
//
// var biz = angular.module('myApp.view1', ['ngRoute']);
//
biz.controller('View1Ctrl', ['$scope','$http',function($scope, $http) {
  $http.get("assets/js/fakeData.json").then(function(data){
      $scope.businessServices = data.data;
      // businessServices is a variable, or is it a property?
  });
}]);
