export default /*@ngInject*/ function usersController($scope, $routeParams){
    console.log('users controller ran');
    console.log('params are: ', $routeParams)
    $scope.usersVar = 'usersVar';
}
