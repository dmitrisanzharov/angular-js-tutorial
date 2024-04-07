import myMainWrapperConst from '/app/app.js';

myMainWrapperConst.directive('fooComponent', [function(){
    return {
        templateUrl: 'app/components/foo/foo.temp.html',
        scope: { },
        controller: function($scope){
        // console.log('$scope', $scope)


            // console.log('foo started');
            $scope.fooVarOne = 'foo var one';
        }
    }
}]);