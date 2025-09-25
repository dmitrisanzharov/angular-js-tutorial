const myMainAppWrapperConst = angular.module('myMainAppWrapper', []);

myMainAppWrapperConst.controller('MyMainController', ['$scope', function ($scope) {
    $scope.myMainTitle = 'Hello Foo, this is a String!'
}])