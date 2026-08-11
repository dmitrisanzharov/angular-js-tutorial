import { routerStackingFn } from './router/index.js';
import allServices from './services/servicesIndex.js';
import myMainServicesFn from './services/index2.js';

export const appModuleConst = angular.module('myMainModuleString', ['moduleTwo', 'ngRoute']);

appModuleConst.controller(
    'MyMainController',
    /*@ngInject*/ function ($scope, $sce, $filter, $http, myServiceName, mahManService, sayHello, $location) {

        $scope.count = 0;

        $scope.changeCountFn = function(){
            $scope.count = $scope.count + 1; 
        }

        $scope.myArrWatch = ['empty'];

        $scope.pushToArr = function(){
            $scope.myArrWatch.push(Math.random().toFixed(2))
        }

        console.log('rerendered')

        // $scope.$watch('count', function(newVal, oldVal, scope){
        //     console.log('============================');
        //     console.log('newVal', newVal);
        //     console.log('oldVal', oldVal);
        //     console.log('scope', scope);
        // })

        $scope.$watchCollection('myArrWatch', function(newVal, oldVal, scope){
            console.log('============================');
            console.log('newVal', newVal);
            console.log('oldVal', oldVal);
            console.log('scope', scope);
        })


        // ----------------------------------------------------------------------


        // console.log('sayHello', sayHello.omgSayHiFn());

        // console.log('location', $location);

        $scope.myServiceVar1 = myServiceName.serviceVar1;

        $scope.myServiceFn1 = myServiceName.serviceFn1;

        $scope.submitFormFn = function () {
            console.log('form submitted, here is scope', $scope);
            let test = $location.path();
            // console.log('test: ', test);

            $location.path('/about');

            $location.search({ omg: 'foo' });
            $location.search({});
        };

        $http.get('https://jsonplaceholder.typicode.com/users').then((response) => {
            // console.log('resp', response);
        });

        $scope.items = [
            { name: 'name1', value: 1 },
            { name: 'name2', value: 2 },
            { name: 'name3', value: 3 }
        ];

        $scope.myArr2 = ['a', 'b', 'c', 'e', 'f', 'd'];

        $scope.allPagesArr = [
            { url: '#/home/my-number/yuri', name: 'home' },
            { url: '#/about', name: 'about' },
            { url: '#/new', name: 'does not exist, goes to home' }
        ];

        $scope.myObj2 = [
            { name: 'a', value1: 1 },
            { name: 'b', value1: 2 },
            { name: 'c', value1: 3 },
            { name: 'd', value1: 4 }
        ];

        // let test = $filter('arrayHasLetterInIt')($scope.myArr2, 'b', 'c');
        // console.log('test', test);

        $scope.sayHi = 'hello from main controller';

        $scope.count = 0;

        $scope.incCountFn = function () {
            console.log('incCountFn ran');
            $scope.count = $scope.count + 1;
        };

        $scope.isDisabled = true;

        $scope.myImg = 'app/assets/free.png';

        $scope.submitFn = function () {
            console.log('submitted');
        };

        $scope.myFn = function () {
            console.log('ran', $scope);
        };

        $scope.googleLink = 'https://www.google.com';

        // console.log('scope', $scope);
    }
);

// router
routerStackingFn(appModuleConst);

// services via function
allServices(appModuleConst);
myMainServicesFn(appModuleConst);

// appModuleConst.filter('arrayHasLetterInIt', function () {
//     return function (...args) {
//         console.log('args', args);

//         let firstItemOnTheLeft = args[0];
//         let argsAreItemsOnTheRightAfterSemiColumn = args[1];

//         return firstItemOnTheLeft.filter((item) => {
//             console.log('iteration of item', item);
//             return item.includes(argsAreItemsOnTheRightAfterSemiColumn);
//         });
//     };
// });

// appModuleConst.filter('multiplyBySecond', function () {
//     return function (...args) {
//         let arg1 = args[0];
//         let arg2 = args[1];

//         return arg1 * arg2;
//     };
// });

// console.log('appModuleConst', appModuleConst);

// appModuleConst.config(function(){
//     console.log('config ran');
// })

// appModuleConst.run(function(){
//     console.log('run ran');
// })

// services
appModuleConst.service('myServiceName', function () {
    this.serviceFn1 = function () {
        console.log('hello');
    };

    this.serviceVar1 = 'omg it worked';
});

appModuleConst.controller(
    'Controller2',
    /*@ngInject*/ function ($scope) {
        $scope.controller2Var = 'omg2';
        console.log('$scope controller 2', $scope);
        console.log('in child', $scope.sayHi);
    }
);

appModuleConst.component('componentOne', {
    templateUrl: 'app/templates/componentOne.html',
    transclude: true,
    replace: true,
    bindings: {
        countProp: '=',
        incCountFn: '<'
    },
    controller: ComponentOneController
});

function ComponentOneController($rootScope) {
    console.log('componentOneController', $rootScope);
}

// CUSTOM DIRECTIVE
appModuleConst.directive('directiveOne', function () {
    return {
        template: '<h1>Directive One: {{directiveOneStr}} and prop is: {{myPropOne}} and {{$parent.sayHi}}</h1>',
        scope: {
            myPropOne: '='
        },
        controller: function ($scope, $rootScope) {
            $scope.directiveOneStr = 'directiveOneStr';
            console.log('scope in directiveOne', $scope);
            console.log('============================');
            console.log('root in directiveOne', $rootScope);
            $rootScope.omg = 'omg';
        }
    };
});
