const myAngularModuleConst = angular.module('myAngularMainModule', []);

myAngularModuleConst.controller('MyMainController', ['$scope', function($scope) {
    $scope.parentTitle = 'Parent Title String';
    console.log('scope', $scope);
    $scope.seeScope = function(){
        console.log($scope);
    }
    $scope.changeArr = function(){
        $scope.myArr = ['a', 'b', 'c'];
    }

    $scope.myObj2 = [{name: 'a', value1: 1, foo: 'b'}, {name: 'b', value1: 2}, {name: 'c', value1: 3}, {name: 'd', value1: 4}];
}]);


myAngularModuleConst.controller('MySecondController', ['$scope', function($scope) {
    $scope.childTitle = 'Child Title String';
    console.log('scope2', $scope);
}]);