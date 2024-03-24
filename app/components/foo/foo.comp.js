import { myMainWrapperConst } from '/app/app.js';

myMainWrapperConst.directive('fooTrollComponent', [function(){
    return {
        scope: {
            title: '='
        },
        templateUrl: 'app/components/foo/foo.tpl.html',
        transclude: true,
        replace: true,
        controller: function($scope, $rootScope){
            $scope.fooVar = 'fooVar1';
            $scope.$root.newVar = 'I just added it'; 
            $scope.allNames = [{name: 'a'}, {name: 'b'}, {name: 'c'}];

            // consoles
            // console.log('scope', $scope);
            // console.log('rootScope', $rootScope);
            // console.log('rootScope', $rootScope.testRootScope);
            // console.log('scope', $scope.$parent.myFoo);
        }
    }
}]); 