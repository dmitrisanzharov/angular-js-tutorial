const fooComponentObject = {
    templateUrl: 'app/components/foo/foo.tpl.html',
    controller: FooController,
    bindings: {
        titleProp: '=',
    },
};

function FooController() {
    this.myFooVar = 'foo var';
}

export default fooComponentObject;



