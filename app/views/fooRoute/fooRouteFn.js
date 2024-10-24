export default /*@ngInject*/ function($routeProvider){
    $routeProvider.when('/foo', {
        templateUrl: 'app/views/fooRoute/foo.route.tpl.html',
        controller: FooController
    })
}

function FooController($scope){
    document.title = 'foo page';
    $scope.foo2 = 'did the foo route work?';
}