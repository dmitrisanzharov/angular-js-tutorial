import { pagesArrayForLinks } from '../pages/indexPagesMain.js';
import dataOne from '../data/dataOne.js';

export default /*@ngInject*/ function MyAngularAppController ($scope, addTwoNumbersService, $filter){
    $scope.appTitle = 'My Angular App Navbar';
    $scope.pagesArray = pagesArrayForLinks;
    
    let a = addTwoNumbersService.addThem(1,2);

    $scope.myArr = [1,2,3];

    let myFilterInsideController = $filter('klToml')(5);

    $scope.seeScope = function(){
        console.log($scope);
    }

    const dataDummy = [{first_name: 'Dimi', id: 1, last_name: 'CEO'}, {first_name: 'Bob', id: 2, last_name: 'CTO'}, {first_name: 'John', id: 3, last_name: 'CFO'}];

    $scope.gridOptions = {
        data: dataDummy,
        sort: {
            predicate: 'first_name', // name of the column DATA key
            direction: 'desc' // 'asc'
        }
        };



 
}