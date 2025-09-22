// import controllerFunction1 
// import controllerFunction2 


function allControllers(myMainAppWrapper) {
    myMainAppWrapper
        .controller('controller1', controllerFunction1)
        .controller('controller2', controllerFunction2)
}

export default allControllers;