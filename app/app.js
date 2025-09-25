const myMainAppWrapperConst = angular.module('myMainAppWrapper', []);

myMainAppWrapperConst.controller('MyMainController', [
    '$scope',
    function ($scope) {
        $scope.title3 = 'title from parent';

        $scope.$watch(
            'myInput.name',
            function (newValue, oldValue, scope) {
                console.log('============================');
                console.log('scope', scope);
                console.log('ra', newValue);
            },
            true
        );
    }
]);
