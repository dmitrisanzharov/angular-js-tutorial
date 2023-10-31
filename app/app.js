const myNinjaAppConst = angular.module('nameOfMyModuleOne', []); // in the [] I can add any dependencies

myNinjaAppConst.controller('NinjaControllerAsName', [
    '$scope',
    function ($scope) {
        // $scope as a dependency injection
        console.log('scope', $scope);
        $scope.message = 'hows it going!';

        $scope.ninjas = [
            {
                name: 'Yoshi',
                belt: 'green',
                rate: 50,
                available: true,
            },
            {
                name: 'Crystal',
                belt: 'Yellow',
                rate: 30,
                available: true,
            },
            {
                name: 'Ryu',
                belt: 'orange',
                rate: 10,
                available: false,
            },
            {
                name: 'Shaun',
                belt: 'black',
                rate: 1000,
                available: true,
            },
        ];

        $scope.removeNinja = function(ninja){
            console.log('ninja', ninja);

            const removedNinja = $scope.ninjas.indexOf(ninja);
            console.log("removedNinja: ", removedNinja);
            $scope.ninjas.splice(removedNinja, 1);
        }

        $scope.mySubmit = function(){
            console.log('scope console', $scope);
        }


        // end of the function scope
    },
]);
