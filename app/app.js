import allControllers from './controllers/index.js'


const myAppWrapperConst = angular.module('myAppWrapperModule', []);

myAppWrapperConst.controller('MyCont1', ['$scope', function($scope) {
    $scope.foo1 = 'foo1 string';
    $scope.foo2 = 'foo2 string';

    $scope.forInclude = 'is this included?'

    $scope.showScope = function(){
        console.log('scope', $scope);
    }

    $scope.changeArr = function(arg){
        $scope.myVar1.push(arg)
    }

    $scope.myObj1 = { foo1: 'one', foo2: 'two', foo3: 'three' }
}])

myAppWrapperConst.controller('MyCont2', ['$scope', function($scope) {
    $scope.bar1 = 'bar1 lalala';
    $scope.bar2 = 'bar2 lalala';
}])


allControllers(myAppWrapperConst);
