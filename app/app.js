const mainApp = angular.module('mainAppModule', ['phoneList', 'ngRoute']);

mainApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/home', {
            templateUrl: 'view/home.html'
        })
        .when('/test2', {
            templateUrl: 'view/test2.html'
        })
        .when('/form', {
            template: '<h1>Form Submitted</h1>'
        })
        .otherwise({
            redirectTo: '/test2'
        })
}])


mainApp.run(function(){
    console.log('it is running');
})


mainApp.controller('MainAppController', ['$scope', '$rootScope', '$http', '$location', function($scope, $rootScope, $http, $location){

    $http.get('data/ninjas.json').success(el => $scope.myNinjas = el);

    $scope.myVar1 = 'Yello';

    $rootScope.myRoot1 = 'root1';


    $scope.myArr = ['c', 'a', 'b'];

    console.log('test root', $rootScope);

    $scope.seeScope = function(){
        console.log('scope', $scope);
      
    }


    $scope.myButton = function(arg){
        console.log('myTest', arg);
    }


    $scope.deleteMe = function(){
        delete $rootScope.myRoot1;
    }

    $scope.finalSubmit = function(){
        console.log('final submit');
        $location.path('/form')
    }

}])


mainApp.directive('doSomething', [function(){
   return {
        scope: {
            ya1: '=',
            myLongName: '='
        },
        transclude: true,
        replace: true,
        templateUrl: 'app/otherTemplates/do-something.tpl.html',
        controller: function ($scope){
            $scope.myColorRed = 'green';
        }
   }
}])