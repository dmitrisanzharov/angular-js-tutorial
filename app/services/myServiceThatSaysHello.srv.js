function myServiceThatSaysHello(/* do NOT put arguments here, only stuff like: $scope */){
    this.myVar = 'hello from service';

    this.myFnWithArg = function(arg){ /* <-- PUT ARGUMENTS HERE*/
        return 'hello' + arg; 
    }
}

export default myServiceThatSaysHello;