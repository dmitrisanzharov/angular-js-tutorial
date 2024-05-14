import mainModuleWrapperConst from 'app/components/foo/foo.js';

mainModuleWrapperConst.component('fooComponent', {
    templateUrl: 'app/components/foo/foo.html',
    controllerAs: 'foo',
    controller: function FooController(){
        this.blah = 'blah';
    }
})