import { pagesArrayForLinks } from '../pages/indexPagesMain.js';

export default /*@ngInject*/ function MyAngularAppController ($scope, addTwoNumbersService, $filter, $mdMedia){
    $scope.appTitle = 'My Angular App Navbar';
    $scope.pagesArray = pagesArrayForLinks;
    
    let a = addTwoNumbersService.addThem(1,2);

    $scope.myArr = [1,2,3,4,5,6,7];

    let myFilterInsideController = $filter('klToml')(5);

    $scope.myVarOne = 6;

    $scope.isGreaterThanSmall = $mdMedia('gt-sm');

}