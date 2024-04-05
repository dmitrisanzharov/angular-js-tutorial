angular.module('barModule', []).component('barComponent', {
    templateUrl: 'app/components/bar/bar.tpl.html',
    replace: true,
    controller: function BarComponentController(){
        // console.log('bar is activated');
        this.barVar1 = 'bar variable one';
    }
})

