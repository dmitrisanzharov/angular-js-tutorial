import HomeController from './home.ctrl.js';

export default /*@ngInject*/ function homeRoutes($routeProvider){
    $routeProvider.when('/home', {
        templateUrl: 'app/pages/home/home.tpl.html',
        controller: HomeController
    })
}