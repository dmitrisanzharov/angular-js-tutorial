// console.log('app started');

const appModuleConst = angular.module('myMainModuleString', []);

console.log('appModuleConst', appModuleConst);

angular.module('myMainModuleString').controller('MyMainController', /*@ngInject*/ function($scope, $sce){
    $scope.sayHi = 'hello from controller';

    $scope.count = 0;

    $scope.myArr = ['a', 'b', 'c'];

    $scope.changeCheckBox = function(){
         // console.log('scope in change checkbox', $scope);
    }


    $scope.add = function(){
        $scope.count = $scope.count + 1
        // console.log('scope in count', $scope);
    }

    $scope.myFnReturn = function(){
        return $sce.trustAsHtml('5');
    }

    // console.log('scope', $scope);
})