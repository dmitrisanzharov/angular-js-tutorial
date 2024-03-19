const myMainWrapperConst = angular.module("myMainWrapper", []).controller("MainControllerOne", [
	"$scope",
	function ($scope) {
		$scope.var1 = "var1";
	},
]).controller("MainControllerTwo", [
	"$scope",
	function ($scope) {
		$scope.var2 = "var2";
	},
]);
