const myMainWrapperConst = angular.module("myMainWrapper", []);

myMainWrapperConst.controller("MyMainWrapperController", [
	"$scope",
	function ($scope) {
		console.log("mainWrapper is working");
		$scope.test = "test";
		$scope.myArrMain = ["a", "b", "c", "d", "e", "f"];
		$scope.myObjMain = { a: "1", b: "2", c: "3", d: "4" };

		$scope.handleChange = function () {
			console.log("$scope", $scope);
		};
	},
]);

// myMainWrapperConst.controller('MyMainWrapperController2', ['$scope', function($scope){
//     console.log('mainWrapper is working 2');
//     $scope.test2 = 'test2';
// }])

export default myMainWrapperConst;
