import fooComponentObject from './foo/foo.comp.js';

export default /*@ngInject*/ function allComponents(myAngularAppConst){
    myAngularAppConst.component('fooComponent', fooComponentObject) // component names must be lowerCamelCase
}

