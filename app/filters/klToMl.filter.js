export default /*@ngInject*/ function klTomlFilterFn(){
    return function (km){
        return (km * 0.621371).toFixed(2);
    }
}