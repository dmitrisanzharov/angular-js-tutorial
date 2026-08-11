angular.module('moduleTwo', []).controller('ModuleTwoController', function($scope){
    $scope.moduleTwoVar = 'moduleTwo string';
})

angular.module('myMainModuleString').service('mahManService', function(){
    this.mahManVar1 = 'mah man string;'
})