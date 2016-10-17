'use strict';

angular.module('myApp.editBusinessService', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/editbusinessservice', {
    templateUrl: 'view2/editbusinessservice.html',
    controller: 'editBusinessServiceCtrl'
    // took out ,'greaterThanZeroCtrl'
  });
}])

.controller('editBusinessServiceCtrl', ['$scope', function($scope) {
$scope.reduceFunctionOptions = [
  {'highestseverity':'HighestSeverity'},
  {'threshold':'Threshold'},
  {'highestseverityabove':'HighestSeverityAbove'},
  {'exponentialpropagation':'ExponentialPropagation'}
];

}])
// Credit for custom directive below: Nitish Kumar https://github.com/nitishkumarsingh13/Angularjs-Directive-Accept-Number-Only
.directive('nnksOnlyNumber', function () {
            return {
                restrict: 'EA',
                require: 'ngModel',
                link: function (scope, element, attrs, ngModel) {
                     scope.$watch(attrs.ngModel, function(newValue, oldValue) {
                          var spiltArray = String(newValue).split("");

                          if(attrs.allowNegative == "false") {
                            if(spiltArray[0] == '-') {
                              newValue = newValue.replace("-", "");
                              ngModel.$setViewValue(newValue);
                              ngModel.$render();
                            }
                          }

                          if(attrs.allowDecimal == "false") {
                              newValue = parseInt(newValue);
                              ngModel.$setViewValue(newValue);
                              ngModel.$render();
                          }

                          if(attrs.allowDecimal != "false") {
                            if(attrs.decimalUpto) {
                               var n = String(newValue).split(".");
                               if(n[1]) {
                                  var n2 = n[1].slice(0, attrs.decimalUpto);
                                  newValue = [n[0], n2].join(".");
                                  ngModel.$setViewValue(newValue);
                                  ngModel.$render();
                               }
                            }
                          }


                          if (spiltArray.length === 0) return;
                          if (spiltArray.length === 1 && (spiltArray[0] == '-' || spiltArray[0] === '.' )) return;
                          if (spiltArray.length === 2 && newValue === '-.') return;

                        /*Check it is number or not.*/
                        if (isNaN(newValue)) {
                          ngModel.$setViewValue(oldValue);
                          ngModel.$render();
                        }
                    });
                }
            };
        });
