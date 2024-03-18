angular.module('myMainWrapper').component('countComponent', {
    templateUrl: 'app/components/count/count.tpl.html',
    bindings: {
        countProp: '=',
        countIncFn: '&'
    }, 
    controller: function CountController() {
        this.title = 'This is my count component!';
    }
})