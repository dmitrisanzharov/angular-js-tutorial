import { pagesArrayForLinks } from '../pages/indexPagesMain.js';

export default /*@ngInject*/ function MyAngularAppController ($scope, addTwoNumbersService, $filter){
    console.log('MyAngularAppController started');
    $scope.appTitle = 'My Angular App Navbar';
    $scope.pagesArray = pagesArrayForLinks;
    
    console.log('============================');
    let a = addTwoNumbersService.addThem(1,2);
    console.log(a);

    $scope.myArr = [1,2,3];

    let myFilterInsideController = $filter('klToml')(5);
    console.log("myFilterInsideController: ", myFilterInsideController);

}