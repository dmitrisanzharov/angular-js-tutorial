const myMainWrapperConst = angular.module('myMainWrapper', []);
let apiUrl = 'https://jsonplaceholder.typicode.com/users'; 


myMainWrapperConst.controller('MyMainWrapperController', ['$scope', '$http', function($scope, $http){
    $scope.count = 0;
    $scope.dummy = true;
    // $scope.foo = 'foo';
    // $scope.color1 = 'red';


    // fails cause no digest cycle
    // fetch(apiUrl)
    // .then(el=> {
    //     $scope.count = $scope.count + 1; 
    //     $scope.$applyAsync();
    //     return el.json()
    // }).then(data => {
    //     console.log('data', data);
    // })

    // works
    // $http.get(apiUrl).then(el => {
    //     $scope.count = $scope.count + 1; 
    //     console.log('http', el.data)
    // })


    $scope.changeCount = function(){
        $scope.count = $scope.count + 1;
    }

    $scope.$watch('dummy', function(){
        $scope.dummy = !$scope.dummy;
        console.log('scope', $scope)
    })


    // $scope.$watch('count', function(newVal, oldVal, watchScope){
    //     console.log('watch triggered: count value is: ', $scope.count);
    // });

    // $scope.$watch('myText', function(){
    //     console.log('myText triggered', $scope.myText)
    // })
    

    // $scope.$watch('foo', function(newVal, oldVal, watchScope){
    //     // console.log('foo has triggered')
    // })


    console.log('$scope end', $scope);
    // console.log('rootScope', $rootScope);
}])