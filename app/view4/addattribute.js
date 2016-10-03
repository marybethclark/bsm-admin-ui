'use strict';

angular.module('myApp.addAttribute', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/addattribute', {
    templateUrl: 'view4/addattribute.html',
    controller: 'addAttributeCtrl'
  });
}])

.controller('addAttributeCtrl', [function() {

}]);
