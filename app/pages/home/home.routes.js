import HomeController from './home.ctrl.js';

export default function homeRoutes($routeProvider){
    $routeProvider.when('/home', {
        templateUrl: 'app/pages/home/home.tpl.html',
        controller: HomeController,
        resolve: {
            meta: function(){document.title = 'Home';}
        }
    })
}