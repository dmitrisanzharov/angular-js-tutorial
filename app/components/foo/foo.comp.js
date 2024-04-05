import myMainWrapperConst from '/app/app.js';

myMainWrapperConst.directive('fooComponent', [function(){
    return {
        template: '<h1>Foo component</h1>',
        scope: {
            fooNameProp: '=',
        },
        controller: function($scope){
            $scope.fooVarOne = 'foo var one';
            console.log('scope in foo: ', $scope);
        }
    }
}])