const myMainWrapperConst = angular.module("myMainWrapper", []);

myMainWrapperConst.controller("MainControllerOne", [
	"$scope",
	function ($scope) {
		$scope.var1 = "var1";
		$scope.myColor = 'red';
	},
]).controller("MainControllerTwo", [
	"$scope",
	function ($scope) {
		console.log('controller2');
		$scope.var2 = "var2";
	},
]);
