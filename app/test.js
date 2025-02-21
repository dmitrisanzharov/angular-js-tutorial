// test.js
function consoleMe(arg){
    console.log('arg', arg);
}

// test.js
const blah = 'blah';
module.exports = blah;

// main.js
const myModule = require('./test.js');
console.log('myModule', myModule); // Outputs: myModule blah


// test.js
function myFunction() {
    console.log("I'm a function!");
}

const myVar = 42;

module.exports = { 
    myFunc: myFunction, 
    myValue: myVar 
};

// anotherFile.js
const myModule = require('./test.js');

myModule.myFunc();  // Outputs: I'm a function!
console.log(myModule.myValue);  // Outputs: 42


// test.js
function asyncOperation() {
    return new Promise((resolve) => {
      setTimeout(() => resolve('Done'), 1000);
    });
  }
  
  module.exports = asyncOperation;

  // main.js
const asyncOperation = require('./test.js');

asyncOperation().then((result) => {
  console.log(result); // Done
});


import('/myModule').then(module => console.log('module', module));