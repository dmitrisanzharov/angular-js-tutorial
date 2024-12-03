import defaultFooFn, { fooFn, fooFn2, colorBlue, colorGreen } from './myStuff/foo.js';
import barVar1 from './myStuff/bar.js';
import * as finalData from './myStuff/barTwo.js';

fooFn();
fooFn2();
defaultFooFn();
console.log('colorBlue', colorBlue);
console.log('colorGreen', colorGreen);
console.log('============================');
console.log('finalData', finalData);
console.log('finalData', finalData.default);
console.log('finalData', finalData.barVarNonDefault);

