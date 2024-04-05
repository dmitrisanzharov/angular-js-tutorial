import myMainWrapperConst from '/app/app.js';

myMainWrapperConst.directive('blahComponent', [function(){
    return {
        template: '<h1>Template of Blah</h1>',
        controller: function($scope){
            console.log('scope in Blah', $scope);
            $scope.blahVar1 = 'var in blah'
        }
    }
}])