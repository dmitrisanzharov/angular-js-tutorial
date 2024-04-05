angular.module('foorModule', []).directive('foorComponent', [function(){
    return {
        templateUrl: 'app/components/foor/foor.tpl.html',
        scope: false,
        bindings: {
            omgOne: '=',
            omgTwo: '='
        },
        controller: function FoorComponentController($scope){
            $scope.foorVarOne = 'foor var one';
            console.log('scope from Foor', $scope)
        }
    }
}])