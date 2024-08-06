// DEFAULT EXPORTS

// CONST version 1
const blah1 = 'blah1 string';
export default blah1;

// CONST version 2: here we need to assign name when importing so:  import myName from './blah.js'; 
// export default 'blah1 string';


// NON-DEFAULT: variables
export const blah2 = 'blah2 string';

const blah3 = 'blah3 string';

export { blah3 }