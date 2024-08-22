import { pagesArrayForLinks } from '../pages/indexPagesMain.js';

export default /*@ngInject*/ function MyAngularAppController ($scope, addTwoNumbersService, $filter){
    $scope.appTitle = 'My Angular App Navbar';
    $scope.pagesArray = pagesArrayForLinks;
    
    let a = addTwoNumbersService.addThem(1,2);

    $scope.myArr = [1,2,3];

    let myFilterInsideController = $filter('klToml')(5);

}