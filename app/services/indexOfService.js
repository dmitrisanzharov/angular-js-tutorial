import myServiceFn from './myService.service.js';
function allServices(myAngularModuleConst){
    myAngularModuleConst.service('myService', myServiceFn)
}

export default allServices;