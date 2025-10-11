export default function homeRoutes($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'app/pages/home/home.html',
            controller: 'HomeController'
        })
}