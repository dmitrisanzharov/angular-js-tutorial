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
            },
            customFilters: {
                myFilterOne: function (itemsFromData, valueFromInputField, filterNameFromGridOptions) {
                    // console.log('myFilterOne ran');
                    // console.log('itemsFromData', itemsFromData);
                    // console.log('valueFromInputField', valueFromInputField);
                    // console.log('filterNameFromGridOptions', filterNameFromGridOptions);

                    if (!valueFromInputField) {
                        return itemsFromData;
                    }

                    return itemsFromData.filter(function (item) {
                        const searchValue = valueFromInputField.toLowerCase();
                        return Object.values(item).some(
                            (val) => val && val.toString().toLowerCase().includes(searchValue)
                        );
                    });
                } // <- no comma needed here if this is the last property in customFilters
            } // <- closes customFilters
        }; // <- closes gridOptions

        $timeout(function () {
            console.log('gridOptions', $scope.gridOptions);
            console.log('gridActions', $scope.gridActions);
        }, 0);

        $scope.showScope = function () {
            console.log('scope', $scope);
        }
    }
]);
