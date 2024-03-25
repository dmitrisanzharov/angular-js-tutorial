export const myMainWrapperConst = angular.module("myMainWrapper", ["ngRoute"]);

myMainWrapperConst.config([
	"$routeProvider",
	function ($routeProvider) {
		$routeProvider
			.when("/bar", {
				templateUrl: "app/views/bar.tpl.html",
				controller: "BarController",
			})
			.when("/omg", {
				templateUrl: "app/views/omg.tpl.html",
			})
			.when("/home", {
				templateUrl: "app/views/home.tpl.html",
			})
			.when("/foo", {
				templateUrl: "app/views/baz.tpl.html",
			})
			.otherwise({
				redirectTo: "/home",
			});
	},
]);

myMainWrapperConst.controller("myMainWrapperController", [
	"$scope",
	"$rootScope",
	function ($scope, $rootScope) {
		$scope.message = "Hello World";
		$scope.myArr2 = ["a", "b", "c", "d", "e", "f"];
		$scope.myObj = { name: "dmitri", age: "immortal" };
		$rootScope.testRootScope = "root scope message";

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
			// console.log("mySubmit");
		};
	},
]);

myMainWrapperConst.controller("BarController", [
	"$scope",
	"$http",
	"$location",
	function ($scope, $http, $location) {
		$scope.barVar1 = "barVar1";
		console.log('scope', $scope);

		$scope.submitTheForm = function(){
			console.log('you submitted the form', $scope.myForm);
		}


	},
]);
