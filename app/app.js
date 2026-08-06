// console.log('app started');

const appModuleConst = angular.module('myMainModuleString', []);

// console.log('appModuleConst', appModuleConst);

appModuleConst.controller('MyMainController', /*@ngInject*/ function($scope, $sce){
    $scope.sayHi = 'hello from controller';

    $scope.showScope = function(){
        console.log('scope of main', $scope);
    }

    // console.log('scope', $scope);
})

appModuleConst.controller('Controller2', /*@ngInject*/ function($scope){
    $scope.controller2Var = 'omg2';
    console.log('$scope controller 2', $scope);
    console.log('in child', $scope.sayHi);
});