angular.module('myMainWrapper', []).controller('MainController', ['$scope', function($scope) {
	$scope.myTest = 'All is working!';
	$scope.count = 0;
	$scope.incCount = function(){
		console.log('ran');
		$scope.count++;
	}
}])

