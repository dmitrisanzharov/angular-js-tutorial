import myMainWrapperConst from '/app/app.js';

myMainWrapperConst.component('fooComponent', {
    templateUrl: 'app/components/foo/foo.tpl.html',
    controllerAs: '$fooCtrl',
    bindings: {
        goldMine: '=',
    },
    transclude: true,
    replace: true,
    controller: [FooComponentController]
}); 


function FooComponentController(){
    var myCont = this;
    this.fooVar1 = 'foo var 1';
    console.log('this', myCont);
    console.log(myCont.goldMine);
}