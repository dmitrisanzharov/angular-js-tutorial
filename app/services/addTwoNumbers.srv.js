export default /*@ngInject*/ function addTwoNumbersService(){
    this.addThem = function(arg1, arg2){
        console.log('addThem ran, demo of service');
        return arg1 + arg2;
    }
}