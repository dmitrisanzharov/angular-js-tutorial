import pages, { pagesArray } from './pages/pagesIndex.js';
import servicesIndex from './services/servicesIndex.js';

const appMainWrapperConst = angular.module('appMainWrapperModule', ['ngRoute']);

pages(appMainWrapperConst);
servicesIndex(appMainWrapperConst);

appMainWrapperConst.controller('AppMainController', [
    '$scope', 'sayHelloService',
    function ($scope, sayHelloService) {
        console.log('AppMainController ran');
        $scope.navBarName = 'My Nav Bar';
        $scope.pagesArrayScope = pagesArray;
        console.log('test', sayHelloService.sayHello('Dmitri'))
    },
]);

export default appMainWrapperConst;
