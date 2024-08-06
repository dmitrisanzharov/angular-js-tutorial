// WARNING!: Make sure that imports have .JS, otherwise will NOT work

// FUNCTIONS - default
// most frequent top, least frequent bottom


// name function
// sometimes people use a different name when importing so care: import canBeDifferentName from './exportSyntaxes.js'
// export default function anyName(){
//     console.log('default, name function')
// }


// no name function
// make sure to import with a NAME: import anyName from './exportSyntaxes.js'
// export default function(){
//     console.log('default, no name function')
// }


// FUNCTIONS - non-default 1
export function nonDefaultOne(){
    console.log('works: nonDefaultOne')
}


function nonDefaultTwo(){
    console.log('works: nonDefaultTwo')
}

export { nonDefaultTwo };



// VARIABLES:

// no name
// make sure to import with a NAME: import anyVariableName from './exportSyntaxes.js'
// export default 'hello world';


// with name, default
const myVariableName = 'hello world, default syntax 2';
export default myVariableName;


// VARIABLES - non default
export const nonDefaultVariable1 = 'nonDefaultVariable1, its a string';

const nonDefaultVariable2 = 2;
export { nonDefaultVariable2 };



// you CAN just use ONE OBJECT for ALL non-default variables like this:
// export { nonDefaultTwo, nonDefaultVariable2};
// alternatively, the fastest way to do it is use: EXPORT statement after variable declaration:  export const nonDefaultVariable1 = 'nonDefaultVariable1, its a string';

