import myMainWrapperConst from '/app/app.js';

myMainWrapperConst.directive('formComponent', [function(){
    return {
        templateUrl: 'app/components/form-component/form-component.tpl.html',
        scope: { },
        controller: function ($scope){
            console.log('form is running');
            console.log('form scope', $scope);

            $scope.handleInputInForm = function(){
                console.log('form scope', $scope);
            }
        }
    }
}])