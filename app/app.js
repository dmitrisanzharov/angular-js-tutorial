const myModule = angular.module("myMainWrapper", []);

myModule.controller("myMainWrapperController", [
	"$scope",
	function ($scope) {
		$scope.message = "Hello World";
		$scope.myArr2 = ["a", "b", "c", "d", "e", "f"];
		$scope.myObj = { name: "dmitri", age: "immortal" };

		$scope.changeMessage = function () {
			console.log("has been clicked");
			console.log("my scope", $scope);
			$scope.message =
				$scope.message === "Hello World"
					? "Goodbye World"
					: "Hello World";
		};

		$scope.changeArray = function () {
			$scope.myArr = [...$scope.myArr, 4];
		};
	},
]);

myModule.controller("MyController2", [
	"$scope",
	function ($scope) {
		$scope.myVar2 = "hello 2";
	},
]);
