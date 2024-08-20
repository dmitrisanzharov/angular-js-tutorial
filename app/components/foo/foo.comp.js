const fooComponentObject = {
    templateUrl: 'app/components/foo/foo.tpl.html',
    controller: FooController,
    bindings: {
        titleProp: '=',
    },
};

function FooController() {
    console.log('foo component ran', this);
}

export default fooComponentObject;



