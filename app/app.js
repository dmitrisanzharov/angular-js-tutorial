import mainServicesIndex from './services/mainServicesIndex.js';

const myAngularAppConst = angular.module('myAngularAppModule', []);

mainServicesIndex(myAngularAppConst);

myAngularAppConst.controller('MyAngularAppConstController', ['$scope', 'myServiceThatSaysHello', 'calcTwoNum', function($scope, myServiceThatSaysHello, calcTwoNum){
    console.log('main controller');
    $scope.title = 'my app';
    console.log('myVar', myServiceThatSaysHello.myVar);
    console.log(myServiceThatSaysHello.myFnWithArg('Dmitri'));
    console.log('should be five', calcTwoNum.doSum(2,3))
}]);

export default myAngularAppConst;

