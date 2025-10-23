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

angular.module('MyAngularAppMainModule').controller('TestController', function ($scope, $timeout) {
    const dataDummy = [
        { first_name: 'Dimi', id: 1, last_name: 'CEO' },
        { first_name: 'Bob', id: 2, last_name: 'CTO' },
        { first_name: 'John', id: 3, last_name: 'CFO' }
    ];

	$scope.showScopeTest = function(){
		console.log('scope in test', $scope);
	}

    $scope.gridOptions = {
        data: dataDummy,
        sort: {
            predicate: 'first_name',
            direction: 'desc'
        },
        customFilters: {
            findName: function(itemsFromData, valueFromInputField, filterNameFromGridOptionsDataObject){
                console.log('itemsFromData', itemsFromData, valueFromInputField, filterNameFromGridOptionsDataObject);
                if(!valueFromInputField){
                    return itemsFromData;
                } else {
                    return itemsFromData.filter(item => {
                        return item.first_name.includes(valueFromInputField)
                    })
                }
            }
        }
    };

    console.log('grid1', $scope.gridOptions);

    $timeout(() => {
        console.log('gridActions', $scope.gridOptions.grid);
    }, 0);
});
