const myMainWrapperConst = angular.module("myMainWrapper", ['barModule', 'bazModule', 'foorModule']);


myMainWrapperConst.config(function(){
	console.log('app has started');
})

myMainWrapperConst.controller("MyMainWrapperController", [
	"$scope",
	function ($scope) {
		// console.log("mainWrapper is working");
		$scope.test = "test";
		$scope.myArrMain = ["a", "b", "c", "d", "e", "f"];
		$scope.myObjMain = { a: "1", b: "2", c: "3", d: "4" };

		$scope.handleChange = function (arg) {
			// console.log("$scope", $scope);
			// console.log('arg', arg);
		};
		$scope.fooVar = 'this is for foo';
		$scope.testBooleanOmg = 'a'

		$scope.handleSubmit = function () {
			// console.log('you submitted something');
		}


		// end of the controller
	},
]);

myMainWrapperConst.controller('MyMainWrapperController2', ['$scope', function($scope){
    // console.log('mainWrapper is working 2');
    $scope.test2 = 'test2, should work';
}])

export default myMainWrapperConst;
