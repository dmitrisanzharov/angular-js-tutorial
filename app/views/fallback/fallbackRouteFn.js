export default /*@ngInject*/ function($routeProvider){
    $routeProvider.when('/fallback', {
        templateUrl: 'app/views/fallback/fallback.route.tpl.html',
        controller: FallbackController
    }).otherwise({
        redirectTo: '/fallback'
    })
}


/*@ngInject*/
function FallbackController($scope){
    document.title = 'Index page'
}