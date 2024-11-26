import { pagesArrayForLinks } from '../pages/indexPagesMain.js';

export default /*@ngInject*/ function MyAngularAppController ($scope, addTwoNumbersService, $filter){
    $scope.appTitle = 'My Angular App Navbar';
    $scope.pagesArray = pagesArrayForLinks;
    
    let a = addTwoNumbersService.addThem(1,2);

    $scope.myArr = [{name: 'one', id: 1, other: 'omg'}, {name: 'two', id: 2, other: 'omg2'}, {name: 'three', id: 3, other: 'omg3'}];

    let myFilterInsideController = $filter('klToml')(5);

    $scope.showScope = function(){
        console.log($scope);
    }

}