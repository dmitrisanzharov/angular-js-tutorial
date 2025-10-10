export const myMainAppWrapperConst = angular
    .module('myMainAppWrapper', ['module2', 'ngRoute'])
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
    '$filter',
    function ($scope, $rootScope, $filter) {
        function fooFn() {}
        fooFn.fooVar = 'fooVarValue';
        // console.log('fooFn', Object.keys(fooFn));

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

        let final = $filter('mahFilter')('a', 'b', 'c');
        // console.log("final: ", final);

        $scope.myArr2 = ['a', 'b', 'c', 'e', 'f', 'd'];
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

myMainAppWrapperConst.run(function () {
    // console.log('run config');
});

myMainAppWrapperConst.controller('MyDummyController', function ($scope) {
    $scope.dummyVar = 'dummyVar';
});

myMainAppWrapperConst.filter('timesTwo', function () {
    return function (arg1, arg2, arg3) {
        // console.log('args: ', arg1, arg2, arg3);
        return arg1 * 2;
    };
});

myMainAppWrapperConst.filter('onlyEven', function () {
    return function (...items) {
        // console.log("items: ", items);
        return items.filter(function (item) {
            return item.value % 2 === 0;
        });
    };
});

myMainAppWrapperConst.filter('mahFilter', function () {
    return function (...items) {
        // console.log("items: ", items);
        return 'hello';
    };
});

myMainAppWrapperConst.filter('arrayMultiple', function () {
    return function (arr, multiple) {
        if (!Array.isArray(arr)) {
            throw new Error('First argument must be an array');
        }

        return arr.map((item) => item * multiple);
    };
});

myMainAppWrapperConst.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {
            // template: '<h1> should be here {{homeVar}}</h1>',
            templateUrl: 'app/pages/home/home.html',
            controller: 'HomeController'
        })
        .when('/about', {
            templateUrl: 'app/pages/about/about.html',
            controller: 'AboutController'
        })
        .when('/contact', {
            template: '<h1 ng-controller=DummyController>Contact Page {{dummy1}}</h1>'
        })
        .when('/mahman', {
            template: '<h1>MahMan title is: {{mahManTitle1}}</h1>',
            controller: function ($scope) {
                $scope.mahManTitle1 = 'omg mahman';
            }
        })
        .otherwise({ redirectTo: '/home' });
});
