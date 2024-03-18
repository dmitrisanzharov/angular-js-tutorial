angular.module("myMainWrapper")
    .component("countComponent", {
        templateUrl: "app/components/count/count.tpl.html",
        controllerAs: 'countCtrl',
        bindings: {
            title: '='
        },
        controller: MyController // OR [MyController]
    });

function MyController(){
    this.count = 0;
    this.incCount = function(){
        this.count++;
    }
    console.log('this', this); 
}