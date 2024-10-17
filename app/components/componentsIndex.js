import fooComponentObj from './fooComponent/foo.comp.js';


export default /*@ngInject*/ function(myMainAppWrapper){
    myMainAppWrapper.component('fooComponent', fooComponentObj)
}