function myServiceFn(){
	this.sayHello = function(nameArg){
		console.log("sayHello", nameArg);
		return 'Hello ' + nameArg;
	}

	this.myServiceVar = 'omg it a service variable';
}

export default myServiceFn;