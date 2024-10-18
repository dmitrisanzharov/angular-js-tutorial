export default /*@ngInject*/ function($scope){
    $scope.myAppTitle = 'This Is Victors App';
    $scope.myArr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];
    $scope.myArr2 =  [{name: 'a'}, {name: 'b'}, {name: 'c'}];
    $scope.myArr3 = ["a", "b", "c", "e", "f", "d"];

    $scope.myObj2 = [{name: 'a', value1: 1, foo: 'b'}, {name: 'b', value1: 2}, {name: 'c', value1: 3}, {name: 'd', value1: 4}];
    $scope.myArrOfNum = [1,2,3,4,5,6,7,8,9,10];
}