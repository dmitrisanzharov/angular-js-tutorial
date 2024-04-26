const myMainWrapperConst = angular.module('myMainWrapper', []);


myMainWrapperConst.controller('MyMainWrapperController', ['$scope', function($scope){
    $scope.myCount1 = true;


    $scope.changeCount = function(){
        console.log('count value', $scope.myCount1);
        $scope.myCount1 = !$scope.myCount1;
        console.log('$scope in function', $scope);
    }


    $scope.$watch('myCount1', function(newVal, oldVal, watchScope){
        console.log('count has changed');
    })


    console.log('$scope end', $scope);

}])