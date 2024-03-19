export const myMainWrapperConst = angular.module('myMainWrapper', []);



myMainWrapperConst.controller('myMainWrapperController', ['$scope', function($scope) {
        $scope.fromMainApp_Var1 = 'this is a string variable from main wrapper'; 
    }]); 