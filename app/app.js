const myMainAppWrapperConst = angular.module('myMainAppWrapper', []);

myMainAppWrapperConst.controller('MyMainController', [
    '$scope',
    function ($scope) {
        $scope.title3 = 'title from parent';
        $scope.items = [{name: 'name1', value: 1}, {name: 'name2', value: 2}, {name: 'name3', value: 3}];
    }
]);

