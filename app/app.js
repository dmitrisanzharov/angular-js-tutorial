import allRoutes from './routes/indexRoutes.js';
import allServices from './services/indexOfService.js';
import consoleMe from './helper/consoleMe.js';




const myAngularModuleConst = angular.module("myAngularMainModule", ["moduleTwo", "ngRoute"]);

allRoutes(myAngularModuleConst);
allServices(myAngularModuleConst);

myAngularModuleConst.controller("MyMainController", [
	"$scope",
	"$rootScope",
    "$http",
	"myService",
	"$location",
	function ($scope, $rootScope, $http, myService, $location) {


		$scope.changeUrl = function(){
			$location.path('/home/ye/ya');
			let a = $location.path();
			console.log('a', a);
			$location.search({page: 3})
		}



		$scope.parentTitle = "Parent Title String";
		// console.log("scope myMainController", $scope);
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
			// console.log("form submitted");
		};

		// console.log("============================");
		// console.log("rootScope in myMainController", $rootScope);
		$rootScope.mahMan = "omg it worked";
		delete $rootScope.mahMan;

        $scope.pagesArr = ['#/home/ye/ya', '#/one', '#/error'];

        $http.get('https://jsonplaceholder.typicode.com/users').then((response) => {
            // console.log('MAIN RESPONSE',response);
        })

		$scope.submitFormAngular = function(){
			console.log('form submitted angular');
		}


		$scope.myServiceVar = myService.myServiceVar;
		$scope.sayHello = myService.sayHello;

		$scope.count = 0;
		$scope.countArr = [];
		$scope.incCount = function(){
			$scope.count = $scope.count+1
			$scope.countArr.push($scope.count);
		}

		$scope.$watch('count', function(newVal, oldVal, watchScope){
			console.log('count has triggered', watchScope.count);
		})
	 
		$scope.$watchCollection('countArr', function(oldVal, newVal, scope){
			console.log(scope);
		}, true)

		$scope.lala = 'oyayaya'; 

		$scope.$watchGroup(['count', 'countArr'], function(newValue, oldValue, scope) {
			console.log('newValue', newValue);
			console.log('oldValue', oldValue);
			console.log('scope', scope);
		})

		$scope.consoleMeFn = consoleMe;
	 
	
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
				// console.log("============================");
				// console.log("myDirectiveOne", $scope);
				// console.log("parent", $scope.$parent.fooVarInit);
				// console.log("root in directive", $scope.$root);
			};
			$scope.myDirectiveOneTitle = "My Directive One Title";
		},
	};
});

myAngularModuleConst.filter("multiplyByAnything", function () {
	return function (...args) {
		// console.log("YOUTUBE DEMO", args);
		let final = args[0].map((item) => item * args[1]);
		return final;
	};
});

myAngularModuleConst.controller("MySecondController", [
	"$scope",
	"multiplyByAnythingFilter",
	function ($scope, multiplyByAnything) {
		$scope.childTitle = "Child Title String";
		// console.log("scope2", $scope);

		$scope.testMyFilter = multiplyByAnything([2, 3, 4], 2);
		// console.log("testMyFilter", $scope.testMyFilter);
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
	// console.log("yak scope", this);
	this.yakTitle = "Yak Title";
	this.myArrOne = [1, 2, 3, 4];
	// console.log("rootScope", $rootScope);
}



