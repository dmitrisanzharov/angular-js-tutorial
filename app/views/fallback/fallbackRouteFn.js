export default /*@ngInject*/ function($routeProvider){
    $routeProvider.when('/fallback', {
        templateUrl: 'app/views/fallback/fallback.route.tpl.html',
    }).otherwise({
        redirectTo: '/fallback'
    })
}