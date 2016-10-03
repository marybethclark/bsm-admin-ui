'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.manageBusinessServices',
  'myApp.editBusinessService',
  'myApp.addEdge',
  'myApp.addAttribute',
  'myApp.editEdge',
  'myApp.editAttribute',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/managebusinessservices'});
}]);
