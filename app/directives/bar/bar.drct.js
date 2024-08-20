export default /*@ngInject*/ function barDirective() {
    return {
        scope: {
            barPropOne: '=',
        },
        templateUrl: 'app/directives/bar/bar.tpl.html',
        controller: barDirectiveController,
    };
}


function barDirectiveController($scope) {
    console.log('bar controller ran', $scope);
    $scope.barVar = 'FROM CONTROLLER';
}
