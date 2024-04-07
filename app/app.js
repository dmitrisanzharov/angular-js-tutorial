const myMainWrapperConst = angular.module('myMainWrapper', ['ngRoute']);

myMainWrapperConst.config(['$routeProvider', function($routeProvider) {
	// routes
	$routeProvider
		.when('/home', {
			templateUrl: 'app/components/views/baz.html'
		})
		.when('/index', {
			templateUrl: 'app/components/views/errorRoute.html',
			controller: 'ErrorController'
		})
		.otherwise({
			redirectTo: '/index'
		})
}])

myMainWrapperConst.controller('MyMainWrapperController', ['$scope', '$rootScope',function($scope, $rootScope){
	$rootScope.rootVarOne = 'rootVarOne';
	console.log('root scope in main controller', $rootScope);
	console.log('scope in main', $scope);
}]);

myMainWrapperConst.controller('ErrorController', ['$scope', '$rootScope',function($scope, $rootScope){
	console.log('error controller kicked in');
}]);

export default myMainWrapperConst;