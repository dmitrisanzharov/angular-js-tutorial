
import addTwoNumbersService from './addTwoNumbers.srv.js';

export default /*@ngInject*/ function allServices(myAngularAppConstArg){
    myAngularAppConstArg.service('addTwoNumbersService', addTwoNumbersService)
}