import mainModuleWrapperConst from '/app/app.js';

mainModuleWrapperConst.component('fooComponent', {
    templateUrl: 'app/components/foo/foo.html',
    controllerAs: 'foo',
    controller: function FooController($rootScope){
        this.blah = 'blah';
        console.log('rootScope', $rootScope);
    }
})