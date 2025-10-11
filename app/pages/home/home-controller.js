angular.module('myMainAppWrapper').controller('HomeController', function ($scope) {
    document.title = 'Home Page';
    console.log('HomeController');
    $scope.homeVar = 'Welcome To Home Page';

    


});