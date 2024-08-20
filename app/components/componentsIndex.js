import fooComponent from './foo/foo.comp.js';

export default /*@ngInject*/ function allComponents(myAngularAppConst){
    myAngularAppConst.component('fooComponent', fooComponent()) // component names must be lowerCamelCase, otherwise fails + must be a CALLED, otherwise fails
}

