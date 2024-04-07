import myMainWrapperConst from '/app/app.js';

myMainWrapperConst.component('barComponent', {
    templateUrl: 'app/components/bar/bar.tpl.html',
    bingings: {},
    controller: function BarComponentController(){
        console.log('this', this);
    }
})