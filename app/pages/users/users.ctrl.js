export default /*@ngInject*/ function usersController($scope, $routeParams){
    console.log('users controller ran');
    console.log('params are: ', $routeParams); // <--- see Params / arguments in here by using: $routeParams
    $scope.usersVar = 'usersVar';
}
