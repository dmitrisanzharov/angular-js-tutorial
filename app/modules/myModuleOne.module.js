const myModuleOneConst = angular.module('myModuleOne', []);

myModuleOneConst.component('myModuleOneComponent', {
    template: '<h1>My module one component {{$ctrl.yoYo}}, this is num: {{$ctrl.myNum}}</h1><ng-transclude></ng-transclude>',
    bindings: {
        myNum: '=myNum',
    },
    transclude: true,
    controller: [MyModuleOneComponentController],
    replace: true,
});


function MyModuleOneComponentController(){
    this.yoYo = 'yolo';


    console.log('component scope', this)
}