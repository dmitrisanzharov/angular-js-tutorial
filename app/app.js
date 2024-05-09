const mainModuleWrapperConst = angular.module('mainModuleWrapper', []); 

mainModuleWrapperConst.controller('MainModuleWrapperController', ['$scope', function($scope){
    $scope.mainTitle = 'Mah Man Is The Main Title!';

    $scope.$watchCollection('myInput', function(oldVal, newVal, scope){
        console.log(scope);
    })
}]);

export default mainModuleWrapperConst;