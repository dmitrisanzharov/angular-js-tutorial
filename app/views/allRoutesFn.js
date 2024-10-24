import barRoute from './barRoute/barRouteFn.js';
import fooRoute from './fooRoute/fooRouteFn.js';
import fallbackRoute from './fallback/fallbackRouteFn.js';


export default /*@ngInject*/ function(myAppWrapperConst){
    myAppWrapperConst
        .config(['$routeProvider', barRoute])
        .config(['$routeProvider', fooRoute])
        .config(['$routeProvider', fallbackRoute])
}

export const allPagesArray = [
    {name: 'foo', href: 'foo'},
    {name: 'bar', href: 'bar'},
    {name: 'fallback', href: 'fallback'}
]