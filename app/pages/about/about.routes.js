import aboutController from './about.ctrl.js';

function aboutRoutes($routeProvider) {
    $routeProvider.when('/about', {
        templateUrl: 'app/pages/about/about.tpl.html',
        controller: aboutController
    });
}



export default aboutRoutes;