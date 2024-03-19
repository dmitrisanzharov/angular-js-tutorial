import { myMainWrapperConst } from '/app/app.js'; 

myMainWrapperConst.component('blahComponent', {
    bindings: {
        fromMainVar1: '=?fromMainVar1'
    },
    templateUrl: 'app/components/blah/blah.tpl.html',
    controller: function BlahController(){
        this.titleOfBlahComponent = 'This is blah component!'
    }
});