import companyController from './company.ctrl.js';

function companyRoutes($routeProvider) {
    $routeProvider.when('/company', {
        templateUrl: 'app/pages/company/company.tpl.html',
        controller: companyController
    });
}

export default companyRoutes;