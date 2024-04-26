const myMainWrapperConst = angular.module('myMainWrapper', []);
let apiUrl = 'http://localhost:5000/dummy'; 


myMainWrapperConst.controller('MyMainWrapperController', ['$scope', '$http', '$rootScope',function($scope, $http, $rootScope){
    $scope.count = 0;
    $scope.foo = 'foo';


    // fails cause no digest cycle
    fetch(apiUrl)
    .then(el=> {
        $scope.count = $scope.count + 1; 
        $scope.$applyAsync();
        return el.json()
    }).then(data => {
        console.log('data', data);
    })

    // works
    $http.get(apiUrl).then(el => {
        $scope.count = $scope.count + 1; 
        console.log('http', el.data)
    })


    $scope.changeCount = function(){
        $scope.count = $scope.count + 1;
    }


    $scope.$watch('count', function(newVal, oldVal, watchScope){
        console.log('watch triggered: count value is: ', $scope.count)
    });

    // $scope.$watch('foo', function(newVal, oldVal, watchScope){
    //     // console.log('foo has triggered')
    // })


    console.log('$scope end', $scope);

}])