'use strict';

angular.module('myApp.addAttribute', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/addattribute', {
    templateUrl: 'view4/addattribute.html',
    controller: 'addAttributeCtrl'
  });
}])

.controller('addAttributeCtrl', function($scope) {
  // function to submit the form after all validation has occurred
$scope.submitForm = function(isValid){
   // check to make sure the form is completely valid
   if (isValid){
  alert('Success!')
   }
 };

});
