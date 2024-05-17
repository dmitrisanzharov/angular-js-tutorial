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
	"$scope", '$http', "$location",
	function ($scope, $http, $location) {
		$scope.count = 0;
        $scope.data;
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

        $http.get("https://jsonplaceholder.typicode.com/users").success((data) => {
            // console.log(data);
            $scope.data = data;
        });

        $scope.handleFormSubmit = function(){
            console.log('scope in form', $scope);
        }



		$scope.increaseCount = function(){
			$scope.count = $scope.count + 1;
		}



		const apiUrl = 'https://jsonplaceholder.typicode.com/users';

		fetch(apiUrl)
		.then(el=> {
			$scope.count = $scope.count + 1;
			$scope.count = $scope.count + 1;
			$scope.$applyAsync();
			return el.json()
		}).then(data => {
			console.log('data', data);
		})
	 

		$scope.$watch('count', function(newVal, oldVal, scope){
			console.log('count', $scope.count)
		})
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
