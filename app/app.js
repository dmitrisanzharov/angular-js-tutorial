// imports
// import homeRoutes from './pages/home/home.routes.js';
// import aboutRoutes from './pages/about/about.routes.js';
import allPagesFn from './pages/indexPagesMain.js'

const myAngularAppConst = angular.module('MyAngularAppMainModule', ['ngRoute']);

allPagesFn(myAngularAppConst);


myAngularAppConst.controller('MyAngularAppController', function ($scope) {
    console.log('MyAngularAppController started');
    $scope.appTitle = 'My Angular App Navbar';
});
