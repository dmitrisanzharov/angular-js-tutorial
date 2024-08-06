import homeRoutes from './home/home.routes.js';
import aboutRoutes from './about/about.routes.js';

export default function pages(myMainWrapperArg){
    myMainWrapperArg
        .config(['$routeProvider', homeRoutes])
        .config(['$routeProvider', aboutRoutes])
}