import itemsController from './items.ctrl.js';

export default /*@ngInject*/ function itemsRoutes($routeProvider) {
    $routeProvider.when('/items/:quantity/:itemName/:originCountry/:Foo', {
        templateUrl: 'app/pages/items/items.tpl.html',
        controller: itemsController
    });
}
