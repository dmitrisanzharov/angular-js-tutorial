import myMainWrapperConst from '/app/app.js';
import { myConsole } from '/app/helper/helper1.js';

myMainWrapperConst.directive('formComponent', [function(){
    return {
        templateUrl: 'app/components/form-component/form-component.tpl.html',
        scope: { },
        controller: function ($scope, $http, $location){
            console.log('form is running');
            console.log('form scope', $scope);

            $scope.handleInputInForm = function(){
                console.log('form scope', $scope);
            }

            $scope.handleSubmit = function(){
                console.log('form submitted');
                $location.path('/error')
            }

            $http.get('https://jsonplaceholder.typicode.com/users').success(el => console.log(el));

            let a = myConsole('yo');
            console.log('a', a);
        }
    }
}])