'use strict';

angular.module('myApp.addEdge', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/addedge', {
    templateUrl: 'view3/addedge.html',
    controller: 'addEdgeCtrl'
  });
}])

.controller('addEdgeCtrl', [function() {

}]);
