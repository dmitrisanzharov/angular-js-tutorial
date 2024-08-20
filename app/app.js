// imports
import allPagesFn from './pages/indexPagesMain.js';
import allControllersStandAlone from './controllers/controllersIndex.js';
import allServices from './services/servicesIndex.js';

const myAngularAppConst = angular.module('MyAngularAppMainModule', ['ngRoute', 'ngMaterial', 'ngMessages']);

allPagesFn(myAngularAppConst);
allControllersStandAlone(myAngularAppConst);
allServices(myAngularAppConst);
