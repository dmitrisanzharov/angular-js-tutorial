// imports
import allPagesFn from "./pages/indexPagesMain.js";
import allControllersStandAlone from "./controllers/controllersIndex.js";
import allServices from "./services/servicesIndex.js";
import allComponents from "./components/componentsIndex.js";
import allDirectives from "./directives/directivesIndex.js";
import allFilters from "./filters/filtersIndex.js";

const dataDummy = [
	{ first_name: "Dimi", id: 1, last_name: "Smith" },
	{ first_name: "Bob", id: 2, last_name: "Connoly" },
	{ first_name: "John", id: 3, last_name: "Stewart" },
];

const myAngularAppConst = angular.module("MyAngularAppMainModule", ["ngRoute", "ngMaterial", "ngMessages", "dataGrid", "pagination"]);

allPagesFn(myAngularAppConst); // router basically
allControllersStandAlone(myAngularAppConst);
allServices(myAngularAppConst);
allComponents(myAngularAppConst);
allDirectives(myAngularAppConst);
allFilters(myAngularAppConst);


myAngularAppConst.controller('MyAngularAppController', ['$scope', '$timeout', function($scope, $timeout) {
	$scope.header = 'My Magic Table';
	// $scope.data = dataDummy;

	$scope.gridOptions = {
		data: dataDummy,
		sort: {
			predicate: 'id',
			direction: 'desc'
		},
		customFilters: {
			nameOfMyFilter: function(itemsFromDataArr, valueFromInputField, filterNameFromGridObject){
				console.log(itemsFromDataArr, valueFromInputField, filterNameFromGridObject);
				if(!valueFromInputField){
					return itemsFromDataArr;
				}
				return itemsFromDataArr.filter(function(item){
					return item.first_name.toLowerCase().includes(valueFromInputField.toLowerCase());
				})
			}
		}
	}


	
	$timeout(function() {
		console.log('options', $scope.gridOptions);
		console.log('actions', $scope.gridActions);
	}, 0)
}]);


