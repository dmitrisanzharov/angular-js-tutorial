// imports
import allPagesFn from './pages/indexPagesMain.js';
import allControllersStandAlone from './controllers/controllersIndex.js';

const myAngularAppConst = angular.module('MyAngularAppMainModule', ['ngRoute', 'ngMaterial', 'ngMessages']);

allPagesFn(myAngularAppConst);
allControllersStandAlone(myAngularAppConst);

// myAngularAppConst.controller('MyAngularAppController', /*@ngInject*/ function ($scope) {
//     console.log('MyAngularAppController started');
//     $scope.appTitle = 'My Angular App Navbar';
//     $scope.pagesArray = pagesArrayForLinks;
// });
