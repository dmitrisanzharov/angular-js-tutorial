// imports
import allPagesFn from './pages/indexPagesMain.js';
import allControllersStandAlone from './controllers/controllersIndex.js';
import allServices from './services/servicesIndex.js';
import allComponents from './components/componentsIndex.js';
import allDirectives from './directives/directivesIndex.js';
import allFilters from './filters/filtersIndex.js';

const myAngularAppConst = angular.module('MyAngularAppMainModule', ['ngRoute', 'ngMaterial', 'ngMessages']);

allPagesFn(myAngularAppConst); // router basically
allControllersStandAlone(myAngularAppConst);
allServices(myAngularAppConst);
allComponents(myAngularAppConst);
allDirectives(myAngularAppConst);
allFilters(myAngularAppConst);

myAngularAppConst.config(function ($mdIconProvider, $mdThemingProvider) {
    $mdIconProvider.icon('rubble', 'app/icons/rubble_head_canine_patrol_paw_patrol_icon_263846.svg', 128);

    $mdThemingProvider.theme('default').primaryPalette('lime').accentPalette('red');
});
