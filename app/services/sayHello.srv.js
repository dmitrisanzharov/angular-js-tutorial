export default function sayHelloService(){
    this.sayHello = function(name){
        return "Hello, " + name + "!";
    }
}