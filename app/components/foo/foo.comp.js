import myMainWrapperConst from "/app/app.js";

myMainWrapperConst.directive("fooComponent", [
	function () {
		return {
			templateUrl: "app/components/foo/foo.temp.html",
			scope: {},
			controller: function ($scope, $rootScope) {
				// console.log("$scope in foo", $scope);
				// console.log("$rootScope in foo", $rootScope);

				// console.log('foo started');
				$scope.fooVarOne = "foo var one";
				$scope.myArr = [
					{ name: "a", value: 1 },
					{ name: "b", value: 2 },
					{ name: "c", value: 3 },
				];
			},
		};
	},
]);
