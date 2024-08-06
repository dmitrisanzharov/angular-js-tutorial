import AboutController from './about.ctrl.js';

export default /*@ngInject*/ function($routeProvider){
    $routeProvider.when('/about', {
        templateUrl: 'app/pages/about/about.tpl.html',
        controller: AboutController
    })
}