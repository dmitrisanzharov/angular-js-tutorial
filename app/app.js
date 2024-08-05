// imports
import { test, boom } from './helper.js';
import homeRoutes from './pages/home/home.routes.js';
import aboutRoutes from './pages/about/about.routes.js';

export const myMainWrapperConst = angular.module('myMainWrapper', ['ngRoute']);

// config stuff
myMainWrapperConst
    .config(['$routeProvider', homeRoutes])
    .config(['$routeProvider', aboutRoutes])

myMainWrapperConst.controller('MainWrapperController', [
    '$scope',
    function ($scope) {
        console.log('controller ran');
        $scope.mainTitle = 'Nav bar';
    },
]);
