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

myAngularAppConst.controller('MyControllerOne', ['$scope', function ($scope) {
    $scope.myArr = [{name: 'one', id: 1, other: 'omg'}, {name: 'two', id: 2, other: 'omg2'}, {name: 'three', id: 3, other: 'omg3'}];

    $scope.seeScope = function(){
        console.log($scope);
    }

}])