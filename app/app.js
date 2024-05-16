const mainModuleWrapperConst = angular.module('mainModuleWrapper', ['blahModule']); 


mainModuleWrapperConst.config(function(){
    console.log('app has started');
})

mainModuleWrapperConst.run(function(){
    console.log('run ran again');
})

mainModuleWrapperConst.controller('MainModuleWrapperController', ['$scope', function($scope){
    $scope.mainTitle = 'Mah Man Is The Main Title!';
    $scope.myArr = ['a', 'b', 'c', 'd', 'e', 'f'];
    $scope.myObj = {name: 'yo', age: 'omg', blah: 'foo'};
    $scope.myObj2 = [{name: 'a', value1: 1}, {name: 'b', value1: 2}, {name: 'c', value1: 3}, {name: 'd', value1: 4}];

    $scope.$root.rootVar1 = 'holy smokes';

    $scope.$watchCollection('myInput', function(oldVal, newVal, scope){
        // console.log(scope);
    })
}]);

mainModuleWrapperConst.controller('MyRandomController', ['$scope', function($scope){
    $scope.title2 = 'foo title 2 it is';
}])

export default mainModuleWrapperConst;