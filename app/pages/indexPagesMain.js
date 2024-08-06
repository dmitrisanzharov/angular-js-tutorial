import homeRoutes from './home/home.routes.js';
import aboutRoutes from './about/about.routes.js';
import companyRoutes from './company/company.routes.js';

function allPagesFn(myAngularAppConstArg) {
    myAngularAppConstArg
        .config(['$routeProvider', homeRoutes])
        .config(['$routeProvider', aboutRoutes])
        .config(['$routeProvider', companyRoutes]);
}

export default allPagesFn;
