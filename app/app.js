import myFnOne from './importsOne.js';
import { myFnTwo as anyFnTwo, myConstTwo } from './importsTwo.js';
import * as anyName from './importThree.js'

myFnOne('test');
anyFnTwo('test2'); 
console.log('myConstTwo', myConstTwo);
console.log('anyName', anyName.default);