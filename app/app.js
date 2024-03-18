export const myMainWrapperConst = angular.module('myMainWrapper', ['longWayToDoModule']); // NOTE: the DEPENDENCY import

myMainWrapperConst.controller('mainAppControllerOne', ['$scope', function($scope) {
    $scope.varOne = 'mainAppControllerOne var one';
}]);