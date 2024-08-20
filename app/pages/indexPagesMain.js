import homeRoutes from './home/home.routes.js';
import aboutRoutes from './about/about.routes.js';
import usersRoutes from './users/users.routes.js';
import itemsRoutes from './items/items.routes.js';

function allPagesFn(myAngularAppConstArg) {
    myAngularAppConstArg
        .config(['$routeProvider', homeRoutes])
        .config(['$routeProvider', aboutRoutes])
        .config(['$routeProvider', usersRoutes])
        .config(['$routeProvider', itemsRoutes]);
}

export const pagesArrayForLinks = [
    { url: '#/home', name: 'home' },
    { url: '#/about', name: 'about' },
    { url: '#/users/1/dmitri', name: 'users, with params' },
    { url: '#/items/5/smart-phones/southKorea/test_me', name: 'items, with params' },
];

export default allPagesFn;
