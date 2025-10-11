angular.module('myMainAppWrapper').controller('AboutController', function ($scope, $routeParams, $http) {
    console.log('AboutController $routeParams', $routeParams);
    // document.title = 'About Page';
    $scope.aboutVar = 'Welcome To About Page';
    console.log('AboutController');

    $http.get('https://jsonplaceholder.typicode.com/posts').then(function (response) {
        console.log('posts response', response);
        $scope.posts = response.data;
    });
});
