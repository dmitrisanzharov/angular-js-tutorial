const myMainAppWrapperConst = angular.module('myMainAppModule', ['ngMaterial', 'ngMessages']);

myMainAppWrapperConst.controller('MainAppController', ['$scope', function($scope) {
    $scope.myAppTitle = 'Welcome To Dmitri App';
}]);