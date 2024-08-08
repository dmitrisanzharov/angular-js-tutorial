
function myServiceThatSaysHello(){
    this.myVar = 'hello from service';

    this.myFnWithArg = function(arg){
        return 'hello' + arg; 
    }
}

export default myServiceThatSaysHello;