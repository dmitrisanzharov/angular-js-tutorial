import myMainWrapperConst from '/app/app.js';

myMainWrapperConst.directive('blahComponent', [function(){
    return {
        template: '<h1>Template of Blah</h1>',
        scope: true,
        replace: true,
        restrict: 'E',
        controller: function($scope){
            console.log('scope in Blah', $scope);
            console.log('parent in Blah', $scope.$parent);
            $scope.blahVar1 = 'var in blah'
        }
    }
}])