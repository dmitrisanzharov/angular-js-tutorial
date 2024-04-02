const myMainWrapperConst = angular.module('myMainWrapper', []);

myMainWrapperConst.controller('myMainWrapperController', ['$scope', function($scope) {
    // console.log('controller is live'); 
    $scope.mainTitle = 'Main Component';
}])

export default myMainWrapperConst;