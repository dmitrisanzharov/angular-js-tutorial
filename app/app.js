const myMainWrapperConst = angular.module('myMainWrapper', []);

myMainWrapperConst.controller('MainWrapperController', ['$scope', function($scope) {
	$scope.mainVarOne = 'main var one';
	console.log('$scope in myMainWrapper: ', $scope);
}]);

myMainWrapperConst.controller('MainWrapperController2', ['$scope', function($scope) {
	$scope.mainVarOne2 = 'main var one 2';
	console.log('$scope in myMainWrapper 2: ', $scope);
}]);

export default myMainWrapperConst;