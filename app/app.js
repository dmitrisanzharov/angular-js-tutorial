const myAngularAppConst = angular.module("MyAngularAppMainModule", ["ngMaterial", "ngMessages"]);

myAngularAppConst.controller("MyAngularAppMainController", [
	"$scope",
	function ($scope) {
		$scope.myTitle = "hello";

		$scope.myArr = [{name: 'one', id: 1, other: 'omg'}, {name: 'two', id: 2, other: 'omg2'}, {name: 'three', id: 3, other: 'omg3'}];

		$scope.seeScope = function(){
			console.log('scope', $scope);
		}

		$scope.mySelectedItem = $scope.myArr[0]
		
	},
]);
