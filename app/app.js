const myMainAppWrapperConst = angular.module('myMainAppWrapper', []);

myMainAppWrapperConst.controller('MyMainController', ['$scope', function ($scope) {
    $scope.myMainTitle = 'Hello Foo, this is a String!'
    $scope.title3 = 'title3 in controller 1'
}]);

myMainAppWrapperConst.controller('MyMainController2', ['$scope', function ($scope) {
    $scope.myMainTitle2 = 'Hello Foo 2, this is a String!';
    $scope.title3 = 'title3 in controller 2'
}])