function sayHelloServiceFn(){
    this.omgSayHiFn = function(){
        console.log('holy sht')
    }
}



export default function myMainServicesFn(angularModuleArg) {
    angularModuleArg.service('sayHello', sayHelloServiceFn)
}