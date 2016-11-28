"use strict";

var biz = angular.module("myApp.manageBusinessServices", ["ngRoute"])

.config(["$routeProvider", function($routeProvider) {
    $routeProvider.when("/managebusinessservices", {
        templateUrl: "view1/managebusinessservices.html",
        // controller: "manageBusinessServicesCtrl" *** PREVIOUS CONTROLLER
        controller: "Principal" //from app.js of sirAccordion project
    });
}]);
// *******************************  adding directive & controller from sir-accordion.js **************************************


// *********************************************************************
// ************  Principal CONTROLLER  *****************************
// *********************************************************************
// "use strict";
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
    $http.get("assets/js/fakeData.json").then(
        function(response) {
            var uncorrectedArray = response.data;

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

// ********************************************************************


// code source, the tutorial:Using AngularJS service | Reading JSON file http://blog.hfarazm.com/angularjs-service/

// *********************************************************************
// ************  PREVIOUS CONTROLLER  **********************************
// *********************************************************************

// biz.controller("manageBusinessServicesCtrl",
// ["$scope", "$http", function($scope, $http) {
//     $http.get("assets/js/fakeData.json").then(
//       function(response){
//         var businessServicesData = response.data;
//
//
//         var flatten = function(h) {
//             var flattenedArray = [];
//             for (var i = 0; i < h.length; i++) {
//                 var currentElement = h[i];
//                 flattenedArray.push(currentElement.name);
//                 // below is kind of like running the for loop on h[1] 3 times. During first run of the for loop, means: still in that 1st index position, which for now is name: A1 in the topmost outermost object, look at the value of childName and run it thru the flatten function.  i.e., push its name value:A2 onto the flattenedArray.  Since there's still a childNameleft to work on,look at the value of childName:A3 and run it thru the flatten function.  i.e., push its name value onto the flattenedArray. Run thru one more time, but this time there's no name value to push, so we move on to the 2nd index position, which is B1 in the outermost object,
//                flattenedArray = flattenedArray.concat(flatten(currentElement.childName));
//             }
//             return flattenedArray;
//         };
//         var result = flatten(businessServicesData);
//         console.log(result);
//         $scope.businessServices = result;
//     });
//   }
// ]);
