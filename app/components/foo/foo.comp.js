import { myMainWrapperConst } from '/app/app.js';

myMainWrapperConst.directive('fooTrollComponent', [function(){
    return {
        scope: {
            title: '='
        },
        templateUrl: 'app/components/foo/foo.tpl.html',
        transclude: true,
        replace: true,
        controller: function($scope){
            console.log('scope', $scope);
            console.log('scope', $scope.$parent.myFoo);
        }
    }
}]); 