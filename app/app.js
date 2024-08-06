// imports
import { test, boom } from './helper.js';
import pages from './pages/pagesIndex.js';

export const myMainWrapperConst = angular.module('myMainWrapper', ['ngRoute']);

// router pages config
pages(myMainWrapperConst); // this is the main function that works


myMainWrapperConst.controller('MainWrapperController', [
    '$scope',
    function ($scope) {
        console.log('controller ran');
        $scope.mainTitle = 'Nav bar';
    },
]);
