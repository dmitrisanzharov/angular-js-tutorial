import homeRoutes from './home/home.routes.js';
import aboutRoutes from './about/about.routes.js';
import companyRoutes from './company/company.routes.js';
import usersRoutes from './users/users.routes.js';

function allPagesFn(myAngularAppConstArg) {
    myAngularAppConstArg
        .config(['$routeProvider', homeRoutes])
        .config(['$routeProvider', aboutRoutes])
        .config(['$routeProvider', companyRoutes])
        .config(['$routeProvider', usersRoutes])
}

export default allPagesFn;
