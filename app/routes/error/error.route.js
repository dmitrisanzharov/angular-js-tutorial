function errorRoute($routeProvider){
    $routeProvider.otherwise({
        redirectTo: '/home'
    })
}

export default errorRoute;