import fooFn1, { fooFn2, fooFn3 } from './practice/fooOne.js';
import * as myFinalData from './practice/barOne.js';


fooFn1();
fooFn2();
fooFn3();

console.log('====================');
console.log('myFinalData', myFinalData)
console.log('myFinalData', myFinalData.barVar3);