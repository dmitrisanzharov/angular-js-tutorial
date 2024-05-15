const mainModuleWrapperConst = angular.module('mainModuleWrapper', ['blahModule']); 

mainModuleWrapperConst.controller('MainModuleWrapperController', ['$scope', function($scope){
    $scope.mainTitle = 'Mah Man Is The Main Title!';
    $scope.myArr = ['a', 'b', 'c', 'd', 'e', 'f'];
    $scope.myObj = {name: 'yo', age: 'omg', blah: 'foo'}

    $scope.$watchCollection('myInput', function(oldVal, newVal, scope){
        console.log(scope);
    })
}]);

mainModuleWrapperConst.controller('MyRandomController', ['$scope', function($scope){
    $scope.title2 = 'foo title 2 it is';
}])

export default mainModuleWrapperConst;