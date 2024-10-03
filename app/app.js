
const myAppWrapperConst = angular.module('myAppWrapperModule', []);

myAppWrapperConst.controller('MyAppMainController', ['$scope', function($scope){
    $scope.myAppTitle = 'This Is Victors App';
}]);