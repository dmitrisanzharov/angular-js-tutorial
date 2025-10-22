import { pagesArrayForLinks } from '../pages/indexPagesMain.js';
import dataOne from '../data/dataOne.js';

export default /*@ngInject*/ function MyAngularAppController($scope, addTwoNumbersService, $filter, $timeout, $http) {
    $scope.showScope = function(){
        console.log($scope);
    }

    // $scope.gridOptions = {
    //     data: dataOne,
    //     customFilters: {
    //         myNewFilter: function(itemsFromData, valueFromInputField, filterName){
    //             console.log('itemsFromData', itemsFromData);
    //             console.log('valueFromInputField', valueFromInputField);
    //             console.log('filterName', filterName);
    //             if(valueFromInputField){
    //                 return itemsFromData;
    //             }

    //             return itemsFromData.filter(item => {
    //                 return item.first_name.includes(valueFromInputField)
    //             })
    //         }
    //     }
    // };

    // console.log('gridOptions', $scope.gridOptions);

    // $timeout(()=> {
    //     console.log('gridActions', $scope.gridActions); 
    // }, 0)

}
