import { homeRoutes } from './home/home.js';
import { aboutRoutes } from './about/about.js';

export function routerStackingFn(myMainModuleWrapper) {
    myMainModuleWrapper.config(homeRoutes).config(aboutRoutes).config(function ($routeProvider) {
        $routeProvider.otherwise({ redirectTo: '/home' });
    });
}
