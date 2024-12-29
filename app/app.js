const myAngularModuleConst = angular.module("myAngularMainModule", ["moduleTwo", "ngRoute"]);

myAngularModuleConst.config([
	"$routeProvider",
	function ($routeProvider) {
		$routeProvider
			.when("/one", {
				templateUrl: "app/html-templates/one.html",
				controller: function OneController($scope) {
					$scope.oneTitle = "One Title";
				},
			})
			.when("/home", {
				templateUrl: "app/html-templates/home.html",
			})

			.otherwise({
				redirectTo: "/home",
			});
	},
]);

myAngularModuleConst.controller("MyMainController", [
	"$scope",
	"$rootScope",
	function ($scope, $rootScope) {
		$scope.parentTitle = "Parent Title String";
		console.log("scope myMainController", $scope);
		$scope.seeScope = function (myArg) {
			// console.log('myArg', myArg);
			console.log($scope);
		};
		$scope.changeArr = function () {
			$scope.myArr = ["a", "b", "c"];
		};

		$scope.myArr2 = ["a", "b", "c", "d"];

		$scope.arrWithNumbers = [1, 2, 3, 4];

		$scope.myObj2 = [
			{ name: "a", value1: 1, foo: "b" },
			{ name: "b", value1: 2 },
			{ name: "c", value1: 3 },
			{ name: "d", value1: 4 },
		];

		$scope.submitForm = function () {
			console.log("form submitted");
		};

		console.log("============================");
		console.log("rootScope in myMainController", $rootScope);
		$rootScope.mahMan = "omg it worked";
		delete $rootScope.mahMan;
	},
]);

myAngularModuleConst.directive("myDirectiveOne", function () {
	return {
		restrict: "AE",
		template:
			'<div><div style="border: {{myNum}}px solid red">My Directive</div> <button ng-click="seeScope()">see scope</button><ng-transclude></ng-transclude>{{3+2}}</div>',
		scope: {
			myNum: "=",
		},
		transclude: true,
		replace: true,
		controller: function MyDirectiveOneController($scope) {
			$scope.seeScope = function () {
				console.log("============================");
				console.log("myDirectiveOne", $scope);
				console.log("parent", $scope.$parent.fooVarInit);
				console.log("root in directive", $scope.$root);
			};
			$scope.myDirectiveOneTitle = "My Directive One Title";
		},
	};
});

myAngularModuleConst.filter("multiplyByAnything", function () {
	return function (...args) {
		console.log("YOUTUBE DEMO", args);
		let final = args[0].map((item) => item * args[1]);
		return final;
	};
});

myAngularModuleConst.controller("MySecondController", [
	"$scope",
	"multiplyByAnythingFilter",
	function ($scope, multiplyByAnything) {
		$scope.childTitle = "Child Title String";
		console.log("scope2", $scope);

		$scope.testMyFilter = multiplyByAnything([2, 3, 4], 2);
		console.log("testMyFilter", $scope.testMyFilter);
	},
]);

myAngularModuleConst.component("yakComponent", {
	templateUrl: "app/html-templates/yak.tpl.html",
	controllerAs: "yakCtrl",
	transclude: true,
	replace: true,
	bindings: {
		myNumRenamed: "=myNum",
		myNameStr: "=",
	},
	controller: YakComponentController,
});

function YakComponentController($rootScope) {
	console.log("yak scope", this);
	this.yakTitle = "Yak Title";
	this.myArrOne = [1, 2, 3, 4];
	console.log("rootScope", $rootScope);
}
