// default exports, import
// import anyName from './exportSyntaxesWithComments.js';
import anyVariableName from './exportSyntaxesWithComments.js';

// non default exports, imports
import { nonDefaultOne, nonDefaultTwo, nonDefaultVariable1, nonDefaultVariable2 } from './exportSyntaxesWithComments.js';

function proofThatWorks() {
    // anyName();
    nonDefaultOne();
    nonDefaultTwo();
    console.log('anyVariableName', anyVariableName);
    console.log('nonDefaultVariable1', nonDefaultVariable1);
    console.log('nonDefaultVariable2', nonDefaultVariable2);

}

export { proofThatWorks };