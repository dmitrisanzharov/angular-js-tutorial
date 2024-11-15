import { allPagesArray } from '../views/allRoutesFn.js';

export default /*@ngInject*/ function ($scope, $filter, myServiceOne, $location) {
    $scope.allPagesArray = allPagesArray;
    $scope.myAppTitle = 'This Is Victors App';
    $scope.myArr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];
    $scope.myArr2 = [{ name: 'a' }, { name: 'b' }, { name: 'c' }];
    $scope.myArr3 = ['a', 'b', 'c', 'e', 'f', 'd'];
    $scope.colorTest = 'red';
    

    $scope.myModel = {};

    $scope.pushIt = function(){
        $scope.myModel.blah = 'omg' + String(Math.random());
    }

    $scope.myObj2 = [
        { name: 'a', value1: 1, foo: 'b' },
        { name: 'b', value1: 2 },
        { name: 'c', value1: 3 },
        { name: 'd', value1: 4 },
    ];
    $scope.myArrOfNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let blah = $filter('multiplyByTwo')(5, 2, 3);
    // console.log("blah: ", blah);

    $scope.mySubmit = function () {
        console.log('submit, scope: ', $scope);
    };

    $scope.redirect = function(){
        console.log('clicked');
        $location.path('/bar');
    }

    $scope.sayHello = myServiceOne.sayHello;
    $scope.servVar = myServiceOne.myServiceVar;

    $scope.$watchCollection('myForm', function(newValue, oldValue, scope) {
        console.log('============================');
        console.log('scope', scope);
        console.log('newValue', newValue);
      }, true);


    $scope.$watchGroup(['theeInput', 'theeInput2'], function(newValue, oldValue, scope) {
        console.log('newValue', newValue);
        console.log('oldValue', oldValue);
        console.log('scope', scope);
        if($scope.theeInput){
            $scope.colorTest = 'green';
        }
    })

    $scope.$watchCollection('myModel', function(newValue, oldValue){
        console.log('myModelChanged', newValue)
        console.log('angular', angular);
    })


    

}
