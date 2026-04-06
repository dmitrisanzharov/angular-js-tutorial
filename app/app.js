// imports
import allPagesFn from './pages/indexPagesMain.js';
import allControllersStandAlone from './controllers/controllersIndex.js';
import allServices from './services/servicesIndex.js';
import allComponents from './components/componentsIndex.js';
import allDirectives from './directives/directivesIndex.js';
import allFilters from './filters/filtersIndex.js';

const myAngularAppConst = angular.module('MyAngularAppMainModule', ['ngRoute', 'ngMaterial', 'ngMessages']);

myAngularAppConst.config(function ($mdIconProvider, $mdThemingProvider) {
    $mdIconProvider.icon('doggy', 'app/icons/marshall_paw_patrol_canine_patrol_icon_263825.svg');
    $mdThemingProvider.theme('default').primaryPalette('green').accentPalette('red');
});

allPagesFn(myAngularAppConst); // router basically
allControllersStandAlone(myAngularAppConst);
allServices(myAngularAppConst);
allComponents(myAngularAppConst);
allDirectives(myAngularAppConst);
allFilters(myAngularAppConst);
