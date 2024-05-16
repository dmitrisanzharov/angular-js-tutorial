import mainModuleWrapperConst from '/app/app.js';

mainModuleWrapperConst.directive('barComponent', [function(){
    return {
        templateUrl: 'app/components/bar/bar.temp.html',
        scope: {
            omgOne: '=',
            omgTwo: '='
        },
        controller: function ($scope){
            $scope.barVar1 = 'this is BAR var1';
            $scope.color1 = 'green';
            console.log($scope)
        }
    }
}]);