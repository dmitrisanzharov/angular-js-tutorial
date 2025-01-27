// imports
import allPagesFn from "./pages/indexPagesMain.js";
import allControllersStandAlone from "./controllers/controllersIndex.js";
import allServices from "./services/servicesIndex.js";
import allComponents from "./components/componentsIndex.js";
import allDirectives from "./directives/directivesIndex.js";
import allFilters from "./filters/filtersIndex.js";

const dataDummy = [{first_name: 'Dimi', id: 1, last_name: 'Smith'}, {first_name: 'Bob', id: 2, last_name: 'Connoly'}, {first_name: 'John', id: 3, last_name: 'Stewart'}];

const myAngularAppConst = angular.module("MyAngularAppMainModule", ["ngRoute", "ngMaterial", "ngMessages", "dataGrid", "pagination"]);

allPagesFn(myAngularAppConst); // router basically
allControllersStandAlone(myAngularAppConst);
allServices(myAngularAppConst);
allComponents(myAngularAppConst);
allDirectives(myAngularAppConst);
allFilters(myAngularAppConst);

myAngularAppConst.controller('MyControllerOne', ['$scope', '$timeout',function ($scope, $timeout) {
	$scope.myTitleOne = 'My Title One';
	$scope.myArrOne = [1,2,3,4,5,6,7,8,9,10];

	$scope.gridOptions = {
		data: dataDummy,
		sort: {
			predicate: 'id',
			direction: 'desc'
		},
		customFilters: {
			anyName: function(itemsFromData, valueFromInputField, filterNameFromGridOptionsObj){

				console.log('============================');
				console.log('itemsFromData', itemsFromData);
				console.log('valueFromInputField', valueFromInputField);


				if(!valueFromInputField){
					return itemsFromData
				}

				let final = itemsFromData.filter(function(item){
					console.log('item', item.last_name)
					return item.last_name.includes(valueFromInputField)
				});
				console.log('final', final)

				return final;
			}
		}
	}

	$timeout(function () {
		console.log('gridOptions', $scope.gridOptions)
	}, 0);
	
}])