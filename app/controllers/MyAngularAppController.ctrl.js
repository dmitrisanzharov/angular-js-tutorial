import { pagesArrayForLinks } from '../pages/indexPagesMain.js';
import dataOne from '../data/dataOne.js';

export default /*@ngInject*/ function MyAngularAppController ($scope, addTwoNumbersService, $filter){
    $scope.appTitle = 'My Angular App Navbar';
    $scope.pagesArray = pagesArrayForLinks;
    
    let a = addTwoNumbersService.addThem(1,2);

    $scope.myArr = [1,2,3];

    let myFilterInsideController = $filter('klToml')(5);

    const dataDummy = [{name: 'Dimi', id: 1, title: 'CEO'}, {name: 'Bob', id: 2, title: 'CTO'}, {name: 'John', id: 3, title: 'CFO'}];

    $scope.gridOptions = {
        data: dataOne, //required parameter - array with data
        //optional parameter - start sort options
        sort: {
            predicate: 'name',
            direction: 'desc'
        }
        };
 
}