import { pagesArrayForLinks } from '../pages/indexPagesMain.js';

export default /*@ngInject*/ function MyAngularAppController ($scope, addTwoNumbersService, $filter, $mdMedia){
    $scope.appTitle = 'Material UI thingy';
    $scope.pagesArray = pagesArrayForLinks;
    
    let a = addTwoNumbersService.addThem(1,2);

    $scope.myArr = [1,2,3];

    let myFilterInsideController = $filter('klToml')(5);

    $scope.isGreaterThanSmall = $mdMedia('gt-sm');
    $scope.isGreaterThanSmall = false;

    $scope.trueFalse = true;

    $scope.myFn = function(){
        console.log('ran')
        $scope.trueFalse = !$scope.trueFalse;
        $scope.$apply();
    }
}