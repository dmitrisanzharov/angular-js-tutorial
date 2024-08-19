import usersController from './users.ctrl.js';


function homeRoutes($routeProvider) {
    $routeProvider.when('/users/:id/:name', {
        templateUrl: 'app/pages/users/users.tpl.html',
        controller: usersController
    });
}


export default homeRoutes;