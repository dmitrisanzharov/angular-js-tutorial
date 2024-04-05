angular.module('bazModule', []).directive('bazComponent', [function(){
    return {
        template: '<h1>This is baz component</h1>',
        controller: function($scope){
            $scope.bacVarOne = 'baz var one'
        }
    }
}])