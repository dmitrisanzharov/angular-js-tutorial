import { myMainWrapperConst } from '/app/app.js'; // note the import here

// so below are standard controller stacking, only vie IMPORTED module
myMainWrapperConst.controller('mainAppControllerTwo', ['$scope', function($scope) {
    $scope.varTwo = 'mainAppControllerTwo var two';
}]);

myMainWrapperConst.controller('mainAppControllerThree', ['$scope', function($scope) {
    $scope.varThree = 'mainAppControllerThree var three';
}]);
