import { pagesArrayForLinks } from '../pages/indexPagesMain.js';
import dataOne from '../data/dataOne.js';

export default /*@ngInject*/ function MyAngularAppController($scope, addTwoNumbersService, $filter, $timeout, $http) {
    $scope.showScope = function(){
        console.log($scope);
    }

    $scope.gridOptions = {
        data: dataOne,
        customFilters: {
            findName: function (items, value, filterName) {
                console.log(items, value, filterName);
                if(!value){
                    return items;
                }
                return items.filter(function (item) {
                    return item.first_name.includes(value);
                });
            }
        }
    };

}
