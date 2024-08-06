import homeController from './home.ctrl.js';


function homeRoutes($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'app/pages/home/home.tpl.html',
        controller: homeController
    });
}


export default homeRoutes;