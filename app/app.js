// imports
import { test, boom } from './helper'

export const myMainWrapperConst = angular.module('myMainWrapper', ['ngRoute']);

// config stuff
myMainWrapperConst.config([
    '$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'app/pages/home/home.tpl.html',
            })
            .when('/about', {
                templateUrl: 'app/pages/about/about.tpl.html',
            });
    },
]);

myMainWrapperConst.controller('MainWrapperController', [
    '$scope',
    function ($scope) {
        console.log('controller ran');
        $scope.mainTitle = 'Nav bar';
    },
]);
