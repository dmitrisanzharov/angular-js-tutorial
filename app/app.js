import pages, { pagesArray } from './pages/pagesIndex.js';

const appMainWrapperConst = angular.module('appMainWrapperModule', ['ngRoute']);

pages(appMainWrapperConst);

appMainWrapperConst.controller('AppMainController', [
    '$scope',
    function ($scope) {
        console.log('AppMainController ran');
        $scope.navBarName = 'My Nav Bar';
        $scope.pagesArrayScope = pagesArray;
    },
]);
