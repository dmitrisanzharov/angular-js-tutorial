console.log('app started');

const appModuleConst = angular.module('myMainModuleString', []);

console.log('appModuleConst', appModuleConst);

angular.module('myMainModuleString').controller('MyMainController', ['$scope', function($scope){
    $scope.sayHi = 'hello from controller';

    $scope.count = 0;


    $scope.add = function(){
        $scope.count = $scope.count + 1
        console.log('scope in count', $scope);
    }

    $scope.myFnReturn = function(){
        return 5;
    }

    console.log('scope', $scope);
}])