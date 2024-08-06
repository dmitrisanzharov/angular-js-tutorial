// imports

// defaults
// import anyName from './allInOne.js';
// import weHaveToAssignANameToDefaultExportVarWithNoName from './allInOne.js';
import anyName2 from './allInOne.js';


// non defaults
import { threeFn, fourFn, mySevenVar, myEightVar } from './allInOne.js';

// import exampleOneBlah, { varOne, varTwo, myArr } from './mixedExample.js'
// import * as myData from './mixedExample.js';

import { varTwo as varFromMixedTwo } from './mixedExample.js'


function proofThatWorks(){
    console.log('proofThatWorks');
    // anyName();
    // anyName2();
    // threeFn();
    // fourFn();
    // console.log('weHaveToAssignANameToDefaultExportVarWithNoName', weHaveToAssignANameToDefaultExportVarWithNoName);
    // console.log('mySevenVar', mySevenVar);
    // console.log('myEightVar', myEightVar);
    // exampleOneBlah();
    // console.log('varOne', varOne);
    // console.log('varTwo', varTwo);
    // console.log('myArr', myArr);

    // console.log('myData', myData);
    // myData.default();
    // console.log('myArr', myData.myArr);
    // console.log('myData', myData);

    console.log('varTwo', varFromMixedTwo);


}

proofThatWorks();