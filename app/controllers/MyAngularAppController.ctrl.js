import { pagesArrayForLinks } from '../pages/indexPagesMain.js';

export default /*@ngInject*/ function MyAngularAppController ($scope, addTwoNumbersService){
    console.log('MyAngularAppController started');
    $scope.appTitle = 'My Angular App Navbar';
    $scope.pagesArray = pagesArrayForLinks;
    
    console.log('============================');
    let a = addTwoNumbersService.addThem(1,2);
    console.log(a);
}