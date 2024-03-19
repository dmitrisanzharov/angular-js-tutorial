import { myMainWrapperConst } from '/app/app.js';

myMainWrapperConst.component("countComponent", {
        templateUrl: "app/components/count/count.tpl.html",
        controllerAs: 'countCtrl',
        bindings: {
            title: '='
        },
        transclude: true,
        replace: true,
        controller: MyController // OR [MyController]
    });

function MyController(){
    this.count = 0;
    this.incCount = function(){
        this.count++;
    }
    // console.log('this', this); 
}