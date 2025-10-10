export default function homeRoutes($routeProvider) {
    $routeProvider
        .when('/about', {
            templateUrl: 'app/pages/about/about.html',
            controller: 'AboutController'
        })
}