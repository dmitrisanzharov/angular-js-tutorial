const appModuleConst = angular.module('myMainModuleString', []);

// console.log('appModuleConst', appModuleConst);

appModuleConst.controller(
    'MyMainController',
    /*@ngInject*/ function ($scope, $sce) {
        $scope.sayHi = 'hello from controller';

        $scope.isDisabled = true;

        $scope.myImg = 'app/assets/free.png';

        $scope.submitFn = function () {
            console.log('submitted');
        };

        $scope.myFn = function () {
            console.log('ran', $scope.isCheckbox);
        };

        $scope.googleLink = 'https://www.google.com';

        // console.log('scope', $scope);
    }
);

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
        propOne: '<propOne'
    },
    controller: ComponentOneController
});

function ComponentOneController() {
    this.userName = 'Dmitri';
    console.log('this in componentOne', this);

    this.myArrOne = [1, 2, 3];
}