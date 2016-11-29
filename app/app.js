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
    'myApp.version',
    'sirAccordion' //from sir accordion//
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({
        redirectTo: '/managebusinessservices'
    });
}]);
// *******************************************************************
// *****************  app.js from sir accordion project **************
// *******************************************************************
var app = angular.module("sirAccordion", [
    "sir-accordion"
])

app.run([function() {
    if ("addEventListener" in document) {
        document.addEventListener("DOMContentLoaded", function() {
            FastClick.attach(document.body);
        }, false);
    }
}]);
