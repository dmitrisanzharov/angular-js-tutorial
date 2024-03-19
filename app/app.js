export const myMainWrapperConst = angular.module("myMainWrapper", []); 

myMainWrapperConst.controller("myMainWrapperController", [
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

		$scope.mySubmit = function () {
			console.log('mySubmit');
		}
	},
]);

