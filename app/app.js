export const myMainAppWrapperConst = angular.module('myMainAppWrapper', ['module2']).controller('DummyController', function ($scope) {
    $scope.dummy1 = 'dummy1';
}).controller('DummyController2', function ($scope) {
    $scope.dummy2 = 'dummy2';
}).component('myFirstComponent', {
    templateUrl: 'app/myFirstComponentHTML.tpl.html',
    controller: function MyFirstComponentFn () {
        this.omgNew = 'omg from component';
    },
    bindings: {
        theName: '=',
        countFromMain: '=',
        fn: '&'
    },
    controllerAs: '$alt',
});;






myMainAppWrapperConst.controller('MyMainController', [
    '$scope',
    function ($scope) {

    $scope.parentStr = 'parentStr';
     
       
        // $scope.items = [{name: 'name1', value: 1, url: 'https://ih1.redbubble.net/image.1442416307.4191/flat,750x,075,f-pad,750x1000,f8f8f8.jpg'}, {name: 'name2', value: 2}, {name: 'name3', value: 3}];
        // $scope.myObj = { foo: 'fooStr', bar: 'barStr', xyx: 'xyxStr', anyKey: 'omg' };
        $scope.countMain = 0;

        // console.log('MyMainController', $scope);


        $scope.changeCount = function (){
            $scope.countMain = $scope.countMain + 1;
        }

        // $scope.mySubmit = function () {
        //     console.log('submit');
        // }

        // $scope.myChange = function () {
        //     console.log('change', $scope.myInput1);
        // }
    }
]);

myMainAppWrapperConst.directive('customDirective', function(){
    return {
        template: '<div>custom directive: {{$parent.parentStr}}</div><ng-transclude />',
        scope: {
            myPropOne: '=',
        },
        controller: function($scope) {
            console.log('child', $scope);
            $scope.dirVar = 'dirVariable';
        },
        transclude: true,
        restrict: 'E'
    }
});

