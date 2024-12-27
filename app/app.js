const myAngularModuleConst = angular.module('myAngularMainModule', ['moduleTwo']);

myAngularModuleConst.controller('MyMainController', ['$scope', function($scope) {
    $scope.parentTitle = 'Parent Title String';
    console.log('scope', $scope);
    $scope.seeScope = function(myArg){
        // console.log('myArg', myArg);
        console.log($scope);
    }
    $scope.changeArr = function(){
        $scope.myArr = ['a', 'b', 'c'];
    }

    $scope.myObj2 = [{name: 'a', value1: 1, foo: 'b'}, {name: 'b', value1: 2}, {name: 'c', value1: 3}, {name: 'd', value1: 4}];

    $scope.submitForm = function(){
        console.log('form submitted');
    }
}]);


myAngularModuleConst.controller('MySecondController', ['$scope', function($scope) {
    $scope.childTitle = 'Child Title String';
    console.log('scope2', $scope);
}]);


myAngularModuleConst.component('yakComponent', {
    templateUrl: 'app/html-templates/yak.tpl.html',
    controllerAs: 'yakCtrl',
    transclude: true,
    replace: true,
    bindings: {
        myNumRenamed: '=myNum',
        myNameStr: '='
    },
    controller: YakComponentController
});

function YakComponentController(){
    console.log('yak scope', this);
    this.yakTitle = 'Yak Title';
    this.myArrOne = [1, 2, 3, 4]; 
}