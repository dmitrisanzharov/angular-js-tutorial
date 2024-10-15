import allControllers from './controllers/index.js'


const myAppWrapperConst = angular.module('myAppWrapperModule', []);

myAppWrapperConst.controller('MyCont1', ['$scope', function($scope) {
    $scope.foo1 = 'foo1 string';
    $scope.foo2 = 'foo2 string';
}])

myAppWrapperConst.controller('MyCont2', ['$scope', function($scope) {
    $scope.bar1 = 'bar1 lalala';
    $scope.bar2 = 'bar2 lalala';
}])


allControllers(myAppWrapperConst);
