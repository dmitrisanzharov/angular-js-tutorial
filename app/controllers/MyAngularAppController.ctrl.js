import { pagesArrayForLinks } from '../pages/indexPagesMain.js';
import dataOne from '../data/dataOne.js';

export default /*@ngInject*/ function MyAngularAppController($scope, addTwoNumbersService, $filter, $timeout, $http) {
    $scope.showScope = function(){
        console.log($scope);
    }

    $scope.gridOptions = {
        data: [],
    };

    function getServerData(params, callback) {
        $http.get('https://jsonplaceholder.typicode.com/users').then(function(response) {
            console.log(response);
            $scope.gridOptions.data = response.data;
            $scope.gridOptions.grid.paginationOptions.totalItems = response.data.length;
            // $scope.gridActions.refresh();
        })
    }

    getServerData();


}
