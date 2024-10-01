const myAngularAppConst = angular.module('MyAngularAppMainModule', ['ngMaterial', 'ngMessages']);

myAngularAppConst.controller('MyAngularAppMainController', ['$scope', function($scope) {
    console.log('scope', $scope);
    $scope.myTitle = 'hello';

    $scope.myArr = [{name: 'one', id: 1}, {name: 'two', id: 2}, {name: 'three', id: 3}];

    $scope.seeScope = function(){
        console.log('scope in Fn', $scope);
    }
}])
