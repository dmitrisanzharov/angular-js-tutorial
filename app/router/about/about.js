export function aboutRoutes($routeProvider) {
    $routeProvider.when('/about', {
        resolve: {
            anyName: function () {
                document.title = 'about';
            }
        },
        templateUrl: 'app/router/about/about.tpl.html'
    });
}
