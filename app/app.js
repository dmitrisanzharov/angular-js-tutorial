import allControllers from './controllers/index.js';
import allComponentsFn from './components/componentsIndex.js';


const myAppWrapperConst = angular.module('myAppWrapperModule', ['myModuleOne']);

myAppWrapperConst.config(function(){
    console.log('app has started');
});

myAppWrapperConst.run(function(){
    console.log('this is app RUN')
})

allControllers(myAppWrapperConst);
allComponentsFn(myAppWrapperConst);

// all are demos
myAppWrapperConst.controller('MyCont1', ['$scope', function($scope) {

    $scope.myImgVar = "https://cdn2.iconfinder.com/data/icons/leto-blue-big-data/64/big_data-04-64.png"
    $scope.myLinkOmg = "https://www.google.com"

    $scope.foo1 = 'foo1 string';
    $scope.foo2 = 'foo2 string';

    $scope.forInclude = 'is this included?'

    $scope.showScope = function(){
        console.log('scope', $scope);
    }

    $scope.changeArr = function(arg){
        $scope.myVar1.push(arg)
    }

    $scope.myObj1 = { foo1: 'one', foo2: 'two', foo3: 'three' }
}])

myAppWrapperConst.controller('MyCont2', ['$scope', function($scope) {
    $scope.bar1 = 'bar1 lalala';
    $scope.bar2 = 'bar2 lalala';
}]);


myAppWrapperConst.directive('testDirective', [function(){
    return {
        template: '<div><h1 style="color: {{myColor1}}">testDirective... {{$parent.myVar}}</h1><h2>omg</h2></div>',
        scope: {
            omgOmg: '='
        },
        replace: true,
        restrict: 'AE',
        controller: function($scope){
            $scope.testDirectiveVar1 = 'testDirective var 1 as a string'
            console.log($scope);
            $scope.fromParent = $scope.$parent.myAppTitle;
            $scope.myColor1 = 'red'
        }
    }
}]);


myAppWrapperConst.filter('multiplyByTwo', function(){
    return function(...args){
        let argArr = [...args];
        // console.log("argArr: ", argArr);

        return argArr[0] * argArr[1] + (argArr[2] || 1);
    }
})


myAppWrapperConst.filter('multiplyByArg2', function(){
    return function(arg, arg2){

        console.log('test 1', arg);
        console.log('test 2', arg2)

        if(!Array.isArray(arg)){
            return arg;
        }

        return arg.map(item=> item * arg2)
    }
})
