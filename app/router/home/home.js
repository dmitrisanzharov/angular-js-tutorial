

export function homeRoutes($routeProvider){
    $routeProvider.when('/home/:id/:name', {
        resolve: {
            meta: function(){
                console.log('resolver in home ran');
                document.title = 'home'
            }
        },
        templateUrl: 'app/router/home/home.tpl.html',
        controller: function HomeRoutesController($scope, $routeParams){
            console.log('============================');
            console.log('controller in home ran');
            console.log($routeParams);
            $scope.homeVar = 'homeVar';
        }
    })
}