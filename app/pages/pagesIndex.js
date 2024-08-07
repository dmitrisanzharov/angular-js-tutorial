import homeRoutes from './home/home.routes.js';
import aboutRoutes from './about/about.routes.js';

export default /*@ngInject*/ function pages(appMainWrapperConstArg) {
    appMainWrapperConstArg.config(['$routeProvider', homeRoutes]).config(['$routeProvider', aboutRoutes]);
}

export const pagesArray = [
    { name: 'home', href: 'home' },
    { name: 'about', href: 'about' },
];
