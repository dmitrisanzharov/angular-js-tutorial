const myMainWrapperConst = angular.module('myMainWrapper', []);

myMainWrapperConst.controller('MainWrapperController', ['$scope', function($scope) {
	$scope.mainVarOne = 'main var one';
	console.log('$scope in myMainWrapper: ', $scope);
}]);

export default myMainWrapperConst;