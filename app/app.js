// import allControllers;
// allControllers(angularModuleConst);

const angularModuleConst = angular.module('angularMainWrapper', []);

angularModuleConst.controller('mainController', function ($scope, $sce) {
    $scope.mainTitle = 'Main Title';
    $scope.showIt = false;

    $scope.myArr = [1, 2, 3, 4, 5];

    $scope.superObj = {
        name: 'Yoshi',
        belt: 'green',
        rate: 50,
        available: true,
        thumb: 'https://ih1.redbubble.net/image.1442416307.4191/flat,750x,075,f-pad,750x1000,f8f8f8.jpg'
    };

    $scope.myFn = function () {
        return $sce.trustAsHtml('<b>Hello</b>');
    };

    console.log('scope', $scope.$id);

    console.log('window', window);

    $scope.$watch(
        'myCheckboxVar',
        function (newValue, oldValue, scope) {
            console.log('============================');
            console.log('scope', scope);
            console.log('checkbox value', newValue);
        },
        true
    );
});
