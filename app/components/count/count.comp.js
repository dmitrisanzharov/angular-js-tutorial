angular.module("myMainWrapper", []).directive('countComponent', [function(){
    return {
        scope: {

        },
        templateUrl: 'app/components/count/count.tpl.html',
        controller: function($scope){
            $scope.omg = 'omg did this work';
        }
    }
}])