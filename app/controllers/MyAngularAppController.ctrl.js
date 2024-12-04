import { pagesArrayForLinks } from '../pages/indexPagesMain.js';

export default /*@ngInject*/ function MyAngularAppController ($scope, addTwoNumbersService, $filter, $mdMedia){
    $scope.appTitle = 'My Angular App Navbar';
    $scope.pagesArray = pagesArrayForLinks;
    
    let a = addTwoNumbersService.addThem(1,2);

    $scope.myArr = [1,2,3];

    let myFilterInsideController = $filter('klToml')(5);

    $scope.myNum = 6;

    $scope.isGreaterThanSmall = true;

    $scope.myTest = $mdMedia('gt-md');

    $scope.count = 0;
    $scope.incCount = function(){
        $scope.count = $scope.count + 1;
    }

}