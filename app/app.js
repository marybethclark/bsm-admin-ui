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

app.controller("Principal", ["$scope", "$compile", "$http", function($scope, $compile, $http) {
    $http.get("js/fakeData.json").then(
        function(response) {
            var uncorrectedArray = response.data;
            // var correctedArray = [];

            function correctTheKeys(u) {
                var correctedKeys = [];
                for (var i = 0; i < u.length; i++) {
                    var currentElement = u[i];
                    var correctedObject = {};
                    correctedObject.title = currentElement.name;
                    correctedObject.subCollection = correctTheKeys(currentElement.childName);
                    correctedKeys.push(correctedObject);
                } //closes for loop
                return correctedKeys;

            } //closes correctTheKeys function
            //at this point the loop starts over
            console.log("Before: ", JSON.stringify(uncorrectedArray, null, 2));
            console.log("After: ", JSON.stringify(correctTheKeys(uncorrectedArray), null, 2));
            var correctedKeys = correctTheKeys(uncorrectedArray);
            console.log(correctedKeys);
            $scope.collection = correctedKeys;
        }); //closes .then and function(response)


    $scope.activeArray = 1;
    $scope.coord = "";
    $scope.accordionConfig = {
        debug: false,
        animDur: 300,
        expandFirst: false,
        autoCollapse: false,
        watchInternalChanges: false,
        headerClass: "",
        beforeHeader: "",
        afterHeader: "",
        topContentClass: "",
        beforeTopContent: "",
        afterTopContent: "",
        bottomContentClass: "",
        beforeBottomContent: "",
        afterBottomContent: ""
    };

    //   $scope.collection =
    //   [{
    //     "title": "A1",
    //     "subCollection": [{
    //         "title": "A2",
    //         "subCollection": [{
    //             "title": "A3",
    //             "subCollection": []
    //         }]
    //     }]
    // }, {
    //     "title": "B1",
    //     "subCollection": [{
    //         "title": "B2",
    //         "subCollection": [{
    //             "title": "B3",
    //             "subCollection": []
    //         }]
    //     }]
    // }
    // ];

    $scope.toggleAutoCollapse = function() {
        $scope.$broadcast("sacCollapseAll");
        $scope.accordionConfig.autoCollapse = !$scope.accordionConfig.autoCollapse;
    };

    $scope.expandByCoord = function() {
        $scope.$broadcast("sacExpandContentById", $scope.coord);
    }

    $scope.collapseByCoord = function() {
        $scope.$broadcast("sacCollapseContentById", $scope.coord);
    }

    $scope.expandAll = function() {
        $scope.$broadcast("sacExpandAll");
    };

    $scope.collapseAll = function() {
        $scope.$broadcast("sacCollapseAll");
    };
    //close appcontroller
}]);
