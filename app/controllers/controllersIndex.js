// here I put all STAND ALONE controllers
// they are NOT part of directives or components

import MyAngularAppController from './MyAngularAppController.ctrl.js';

export default /*@ngInject*/ function allControllersStandAlone(myAngularAppConstArg){
    myAngularAppConstArg.controller('MyAngularAppController', MyAngularAppController)
}