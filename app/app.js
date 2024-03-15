angular
	.module("myMainWrapper", [])
	.controller("myMainWrapperController", ["$scope", function ($scope) {
        $scope.message = "Hello World";

        $scope.changeMessage = function () {
            console.log('has been clicked');
            console.log('my scope', $scope);
            $scope.message = $scope.message === "Hello World" ? "Goodbye World" : "Hello World";
        };
    }]);
