export default /*@ngInject*/ function($routeProvider){
    $routeProvider.when('/foo/:id/anyName/:value', {
        templateUrl: 'app/views/fooRoute/foo.route.tpl.html',
        controller: FooController
    })
}

/*@ngInject*/
function FooController($scope, $routeParams, $http){
    document.title = 'foo page';
    $scope.foo2 = 'did the foo route work?';
    console.log('foo route params', $routeParams);


    $http.get('https://jsonplaceholder.typicode.com/users').success(data => console.log('data', data)).catch(err => console.log('error', err));
}