const myNinjaAppConst = angular.module('nameOfMyModuleOne', ['ngRoute', 'ngAnimate']); // in the [] I can add any dependencies


myNinjaAppConst.config(['$routeProvider', function($routeProvider){


    $routeProvider
        .when('/home', {
            templateUrl: 'view/home.html',
            controller: 'NinjaControllerAsName'
        })
        .when('/directory', {
            templateUrl: 'view/directory.html',
            controller: 'NinjaControllerAsName'
        })
        .when('/contact', {
            templateUrl: 'view/contact.html',
            controller: 'ContactController'
        })
        .when('/contact-success', {
            templateUrl: 'view/contact-success.html',
            controller: 'ContactController'
        })
        .otherwise({
            redirectTo: '/home'
        })
}]);


myNinjaAppConst.directive('randomNinja', [function(){
    return {
        scope: {
            ninjas: '=',
            title: '=' 
        },
        templateUrl: 'view/random.html',
        transclude: true,
        replace: true,
        controller: function($scope){
            $scope.random = Math.floor(Math.random() * 4); 
        }
    }
}]); 


myNinjaAppConst.controller('ContactController', ['$scope', '$location', function($scope, $location){
    $scope.sendMessage = function (){
        $location.path('/contact-success');
        console.log($scope);
    }
}]);


myNinjaAppConst.controller('NinjaControllerAsName', [
    '$scope',
    '$http',
    function ($scope, $http) {
        // $scope as a dependency injection
        console.log('scope', $scope);
        $scope.message = 'hows it going!';



        console.log(JSON.stringify($scope.ninjas));

        $scope.removeNinja = function(ninja){

            const removedNinja = $scope.ninjas.indexOf(ninja);
            console.log("removedNinja: ", removedNinja);
            $scope.ninjas.splice(removedNinja, 1);
        }

       $scope.addNinja = function(){
            $scope.ninjas.push({
                name: $scope.newNinja.name,
                belt: $scope.newNinja.belt,
                rate: String($scope.newNinja.rate),
                available: true
            });
            $scope.newNinja.name = "";
            $scope.newNinja.belt = "";
            $scope.newNinja.rate = "";
       }


       $http.get('/data/ninjas.json')
        .success(data => $scope.ninjas = data);


        // end of the function scope
    },
]);
