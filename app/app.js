const mainModuleWrapperConst = angular.module("mainModuleWrapper", [
	"blahModule",
	"ngRoute",
]);

mainModuleWrapperConst.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when("/foo-view", {
			templateUrl: "app/views/fooView.html",
            controller: 'FooController'
		})
		.when("/omg", {
			templateUrl: "app/views/omgView.html",
		})
		.when("/home", {
			templateUrl: "app/views/homeView.html",
            controller: 'HomeController'
		})
		.otherwise({
			redirectTo: "/home",
		});
}]);

mainModuleWrapperConst.controller("MainModuleWrapperController", [
	"$scope",
	function ($scope) {
		$scope.mainTitle = "Mah Man Is The Main Title!";
		$scope.myArr = ["a", "b", "c", "d", "e", "f"];
		$scope.myObj = { name: "yo", age: "omg", blah: "foo" };
		$scope.myObj2 = [
			{ name: "a", value1: 1 },
			{ name: "b", value1: 2 },
			{ name: "c", value1: 3 },
			{ name: "d", value1: 4 },
		];

		$scope.$root.rootVar1 = "holy smokes";

		$scope.$watchCollection("myInput", function (oldVal, newVal, scope) {
			// console.log(scope);
		});
	},
]);

mainModuleWrapperConst.controller("MyRandomController", [
	"$scope",
	function ($scope) {
		$scope.title2 = "foo title 2 it is";
	},
]);

mainModuleWrapperConst.controller('FooController', ['$scope', function($scope){
    $scope.fooViewVar1 = 'foo view var 1 from controller';
}])

mainModuleWrapperConst.controller('HomeController', ['$scope', function($scope){
    $scope.fooHomeVar1 = 'HOME view var 1 from controller';
}])


export default mainModuleWrapperConst;
