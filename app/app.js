// imports
import allPagesFn from './pages/indexPagesMain.js';
import allControllersStandAlone from './controllers/controllersIndex.js';
import allServices from './services/servicesIndex.js';
import allComponents from './components/componentsIndex.js';
import allDirectives from './directives/directivesIndex.js';
import allFilters from './filters/filtersIndex.js';

const myAngularAppConst = angular.module('MyAngularAppMainModule', [
    'ngRoute',
    'ngMaterial',
    'ngMessages',
    'dataGrid',
    'pagination'
]);

allPagesFn(myAngularAppConst); // router basically
allControllersStandAlone(myAngularAppConst);
allServices(myAngularAppConst);
allComponents(myAngularAppConst);
allDirectives(myAngularAppConst);
allFilters(myAngularAppConst);

myAngularAppConst.controller('MyMainController', [
    '$scope',
    '$timeout',
    function ($scope, $timeout) {
        $scope.myArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];

        const dataDummy = [
            { first_name: 'Dimi', id: 1, last_name: 'CEO' },
            { first_name: 'Bob', id: 2, last_name: 'CTO' },
            { first_name: 'John', id: 3, last_name: 'CFO' }
        ];

        $scope.gridOptions = {
            data: dataDummy,
			sort: {
				predicate: 'first_name',
				direction: 'asc'
			}
        };

        

        $timeout(function () {
			console.log('gridOptions', $scope.gridOptions);
            console.log('gridActions', $scope.gridActions);
        }, 0);
    }
]);
