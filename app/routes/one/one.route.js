import OneController from './one.ctrl.js';

function oneRoute($routeProvider){
    $routeProvider.when('/one', {
        templateUrl: 'app/routes/one/one.html',
        controller: OneController
    })
}

export default oneRoute;