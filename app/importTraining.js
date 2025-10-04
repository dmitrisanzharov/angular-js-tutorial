import { myMainAppWrapperConst } from './app.js';
// console.log("myMainAppWrapperConst: ", myMainAppWrapperConst);

// myMainAppWrapperConst.component('myFirstComponent', {
//     templateUrl: 'app/myFirstComponentHTML.tpl.html',
//     controller: function MyFirstComponentFn () {
//         this.omgNew = 'omg from component';
//         console.log('scope?', this);
//     },
//     bindings: {
//         theName: '=',
//         countFromMain: '=',
//         fn: '&'
//     },
//     controllerAs: '$alt',
// });


angular.module('module2', []).controller('Module2Controller', function ($scope) {
    $scope.module2Var = 'module2Var';
});