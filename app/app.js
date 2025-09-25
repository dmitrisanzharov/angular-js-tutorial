const myMainAppWrapperConst = angular.module('myMainAppWrapper', []);

myMainAppWrapperConst.controller('MyMainController', ['$scope', function ($scope) {
    $scope.title3 = 'title from parent'
}]);

myMainAppWrapperConst.controller('MyMainController2', ['$scope', function ($scope) {

    console.log('scope in child', $scope)
}])