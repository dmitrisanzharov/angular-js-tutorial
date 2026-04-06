import { pagesArrayForLinks } from '../pages/indexPagesMain.js';

export default /*@ngInject*/ function MyAngularAppController ($scope, addTwoNumbersService, $filter, $mdMedia){

    $scope.myArr = [{name: 'one', id: 1, other: 'omg'}, {name: 'two', id: 2, other: 'omg2'}, {name: 'three', id: 3, other: 'omg3'}];

    $scope.showScope = function(){
        console.log('scope', $scope);
    }

}