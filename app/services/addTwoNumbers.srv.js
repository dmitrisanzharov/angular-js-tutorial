export default /*@ngInject*/ function addTwoNumbersService(){
    this.addThem = function(arg1, arg2){
        return arg1 + arg2;
    }
}