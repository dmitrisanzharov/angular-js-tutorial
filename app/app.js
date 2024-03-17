const myModule = angular.module('myModuleWrapper', []);

myModule.controller('ControllerFoo', ['$scope', function($scope){
    $scope.fooVar = 'foo as string';
    $scope.fooVar2 = 'foo2 as string';
}])


myModule.controller('ControllerBar', ['$scope', function($scope){
    $scope.barVar = 'bar as string';
}]);