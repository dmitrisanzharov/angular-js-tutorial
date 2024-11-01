// imports
import myServiceOneFn from './myServiceOne.serv.js';

export default /*@ngInject*/ function(myAppWrapperConst){
    myAppWrapperConst.service('myServiceOne', myServiceOneFn)
}