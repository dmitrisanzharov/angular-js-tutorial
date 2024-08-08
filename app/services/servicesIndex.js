import sayHelloService from './sayHello.srv.js';

export default function servicesIndex(appMainWrapperConstArg){
    appMainWrapperConstArg.service('sayHelloService', sayHelloService);
}