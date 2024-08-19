export default /*@ngInject*/ function itemsController($scope, $routeParams){
    console.log('items controller ran');
    console.log('params', $routeParams);
    $scope.itemsVar = 'here are all items';
}
