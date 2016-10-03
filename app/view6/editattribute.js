'use strict';

angular.module('myApp.editAttribute', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/editattribute', {
    templateUrl: 'view6/editattribute.html',
    controller: 'editAttributeCtrl'
  });
}])

.controller('editAttributeCtrl', [function() {

}]);
