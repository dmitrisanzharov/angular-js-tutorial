import { pagesArrayForLinks } from '../pages/indexPagesMain.js';
import dataOne from '../data/dataOne.js';

export default /*@ngInject*/ function MyAngularAppController($scope, addTwoNumbersService, $filter) {
    $scope.showScope = function(){
        console.log($scope);
    }

    $scope.data = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' },
        { id: 4, name: 'Diana' },
        { id: 5, name: 'Edward' },
        { id: 6, name: 'Fiona' },
        { id: 7, name: 'George' },
        { id: 8, name: 'Hannah' },
        { id: 9, name: 'Ian' },
        { id: 10, name: 'Julia' },
    ];

    $scope.paginationOptions = {
        totalItems: $scope.data.length,
        itemsPerPage: 3,
        currentPage: 1,
    };

    $scope.gridOptions = {
        data: [],
    };

    $scope.paginate = function () {
        const start = ($scope.paginationOptions.currentPage - 1) * $scope.paginationOptions.itemsPerPage;
        const end = start + $scope.paginationOptions.itemsPerPage;
        $scope.gridOptions.data = $scope.data.slice(start, end);

        console.log('Page:', $scope.paginationOptions.currentPage, 'Data:', $scope.gridOptions.data);
    };

    $scope.paginate();
}
