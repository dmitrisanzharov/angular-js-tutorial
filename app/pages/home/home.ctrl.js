export default /*@ngInject*/ function HomeController($scope){
    console.log('home ran');
    $scope.homeVar = 'HOME VAR FROM SCOPE';
}