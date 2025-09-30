const myMainAppWrapperConst = angular.module('myMainAppWrapper', []);

myMainAppWrapperConst.controller('MyMainController', [
    '$scope',
    function ($scope) {
        $scope.title3 = 'title from parent';
        $scope.items = [{name: 'name1', value: 1, url: 'https://ih1.redbubble.net/image.1442416307.4191/flat,750x,075,f-pad,750x1000,f8f8f8.jpg'}, {name: 'name2', value: 2}, {name: 'name3', value: 3}];
        $scope.myObj = { foo: 'fooStr', bar: 'barStr', xyx: 'xyxStr', anyKey: 'omg' };

        $scope.mySubmit = function () {
            console.log('submit');
        }

        $scope.myChange = function () {
            console.log('change', $scope.myInput1);
        }
    }
]);

