'use strict';

angular.module('myApp.editEdge', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/editedge', {
    templateUrl: 'view5/editedge.html',
    controller: 'editEdgeCtrl'
  });
}])

.controller('editEdgeCtrl', [function() {

}]);
