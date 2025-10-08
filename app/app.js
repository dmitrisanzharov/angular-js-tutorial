export const myMainAppWrapperConst = angular
    .module('myMainAppWrapper', ['module2'])
    .controller('DummyController', function ($scope) {
        $scope.dummy1 = 'dummy1';
    })
    .controller('DummyController2', function ($scope) {
        $scope.dummy2 = 'dummy2';
    })
    .component('myFirstComponent', {
        templateUrl: 'app/myFirstComponentHTML.tpl.html',
        controller: function MyFirstComponentFn() {
            this.omgNew = 'omg from component';
        },
        bindings: {
            theName: '=',
            countFromMain: '=',
            fn: '&'
        },
        controllerAs: '$alt'
    });

myMainAppWrapperConst.controller('MyMainController', [
    '$scope',
    '$rootScope',
    function ($scope, $rootScope) {
        $scope.parentStr = 'parentStr';
        $scope.colorRed = 'red';

        $scope.dataDummy = [
            { first_name: 'Dimi', id: 1, last_name: 'Smith' },
            { first_name: 'Dimi', id: 2, last_name: 'Connoly' },
            { first_name: 'John', id: 3, last_name: 'Stewart' }
        ];

        $scope.items = [
            { name: 'name1', value: 1 },
            { name: 'name2', value: 2 },
            { name: 'name3', value: 3 }
        ];

        $scope.myArr2 = ["a", "b", "c", "e", "f", "d"]; 
        // $scope.myObj = { foo: 'fooStr', bar: 'barStr', xyx: 'xyxStr', anyKey: 'omg' };
        $scope.countMain = 0;

        // console.log('MyMainController', $scope);
        // console.log('MyMainController root', $rootScope);

        $rootScope.fooBar = 'fooBarRoot';

        $scope.changeCount = function () {
            $scope.countMain = $scope.countMain + 1;
        };

        // $scope.mySubmit = function () {
            // console.log('submit');
        // }

        // $scope.myChange = function () {
            // console.log('change', $scope.myInput1);
        // }
    }
]);

myMainAppWrapperConst.directive('customDirective', function () {
    return {
        template: '<div>custom directive: {{$parent.parentStr}}</div><ng-transclude />',
        scope: {
            myPropOne: '='
        },
        controller: function ($scope, $rootScope) {
            // console.log('child', $scope);
            $scope.dirVar = 'dirVariable';
            delete $rootScope.fooBar;
        },
        transclude: true,
        restrict: 'E'
    };
});

myMainAppWrapperConst.config(function () {
    // console.log('myMainAppWrapperConst config');
});

myMainAppWrapperConst.run(function () {
    // console.log('run config');
});

myMainAppWrapperConst.controller('MyDummyController', function ($scope) {
    $scope.dummyVar = 'dummyVar';
});

myMainAppWrapperConst.filter('timesTwo', function () {
    return function (arg){
        // console.log('arg', arg);
        return arg * 2;
    }
});

myMainAppWrapperConst.filter('onlyEven', function () {
    return function (items) {
        console.log("items: ", items);
        return items.filter(function(item) {
            return item.value % 2 === 0;
        });
    }
});
