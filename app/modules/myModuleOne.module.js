const myModuleOneConst = angular.module('myModuleOne', []);

myModuleOneConst.component('myModuleOneComponent', {
    template: '<h1>My module one component {{$ctrl.yoYo}}, this is num: {{$ctrl.myNum}}</h1>',
    bindings: {
        myNum: '=',
        myStr: '='
    },
    controller: [MyModuleOneComponentController]
});


function MyModuleOneComponentController(){
    this.yoYo = 'yolo';

    console.log(this)
}