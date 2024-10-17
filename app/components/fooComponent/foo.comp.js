export default {
    templateUrl: 'app/components/fooComponent/foo.tpl.html',
    bindings: {},
    controllerAs: 'fooScope',
    controller: FooControllerFn
}

function /*@ngInject*/ FooControllerFn(){
    this.myFooCompVar = 'did the foo component work?';
    this.myFooArr = ['a', 'b', 'c', 'd', 'e', 'f'];

    // console.log('fooComponent scope', this)
}