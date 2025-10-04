export const myMainAppWrapperConst = angular.module('myMainAppWrapper', ['module2']).controller('DummyController', function ($scope) {
    $scope.dummy1 = 'dummy1';
}).controller('DummyController2', function ($scope) {
    $scope.dummy2 = 'dummy2';
}).component('myFirstComponent', {
    templateUrl: 'app/myFirstComponentHTML.tpl.html',
    controller: function MyFirstComponentFn () {
        this.omgNew = 'omg from component';
        console.log('scope?', this);
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
        $scope.title3 = 'title from parent';
        $scope.items = [{name: 'name1', value: 1, url: 'https://ih1.redbubble.net/image.1442416307.4191/flat,750x,075,f-pad,750x1000,f8f8f8.jpg'}, {name: 'name2', value: 2}, {name: 'name3', value: 3}];
        $scope.myObj = { foo: 'fooStr', bar: 'barStr', xyx: 'xyxStr', anyKey: 'omg' };
        $scope.countMain = 0;


        $scope.changeCount = function (){
            $scope.countMain = $scope.countMain + 1;
        }

        $scope.mySubmit = function () {
            console.log('submit');
        }

        $scope.myChange = function () {
            console.log('change', $scope.myInput1);
        }
    }
]);



