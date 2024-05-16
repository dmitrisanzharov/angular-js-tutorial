angular.module('blahModule', []).component('blahComponent', {
    templateUrl: 'app/module/blah/blah.tmpl.html',
    replace: true,
    bindings: {
        name: '=',
        numProp: '='
    },
    // transclude: true,
    controller: BlahModuleController
});
function BlahModuleController(){
    const omg = this;
    this.blahVar1 = 'blah var1';
    // console.log(omg);
};