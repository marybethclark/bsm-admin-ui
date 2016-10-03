'use strict';

angular.module('myApp.editBusinessService', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/editbusinessservice', {
    templateUrl: 'view2/editbusinessservice.html',
    controller: 'editBusinessServiceCtrl'
  });
}])

.controller('editBusinessServiceCtrl', [function() {

}]);
