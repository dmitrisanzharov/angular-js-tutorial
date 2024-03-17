const mainApp = angular.module('mainAppModule', []);


mainApp.controller('mainAppController', ['$scope', function($scope){
    $scope.myVar1 = 'myVar1';
    $scope.myVarFinal = 'finalStuff';
}]);

mainApp.controller('mainAppController2', ['$scope', function($scope){
    $scope.myVar2 = 'myVar2';
}]);