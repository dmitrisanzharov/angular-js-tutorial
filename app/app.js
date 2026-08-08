export const appModuleConst = angular.module('myMainModuleString', ['moduleTwo']);

// console.log('appModuleConst', appModuleConst);

appModuleConst.config(function(){
    console.log('config ran');
})

appModuleConst.controller(
    'MyMainController',
    /*@ngInject*/ function ($scope, $sce) {
        $scope.sayHi = 'hello from main controller';

        $scope.count = 0;

        $scope.incCountFn = function(){
            console.log('incCountFn ran');
            $scope.count = $scope.count + 1;
        }

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

function ComponentOneController() {
   
}


// CUSTOM DIRECTIVE
appModuleConst.directive('directiveOne', function(){
    return {
        template: '<h1>Directive One: {{directiveOneStr}} and prop is: {{myPropOne}} and {{$parent.sayHi}}</h1>',
        scope: {
            myPropOne: '='
        },
        controller: function($scope){
            $scope.directiveOneStr = 'directiveOneStr';
            console.log('scope in directiveOne', $scope)
        }
    }
})


