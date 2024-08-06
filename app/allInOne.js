// function default named export

// export default function anyName(){
//     console.log('one')
// }

// function default names export syntax 2

function anyName2(){
    console.log('anyName2')
}

export default anyName2;


// function default no name export
// export default function(){
//     console.log('two');
// }



// function non-default export before const syntax
export function threeFn(){
    console.log('three');
}


// function non-default object syntax

function fourFn(){
    console.log('four');
}

// export { fourFn }


// primitives default named
// const myVarFive = 'five is string';
// export default myVarFive;

// primitives default no named
// export default 'six is also a string';


// primitive non-default export before const syntax
export const mySevenVar = 'seven is string';


// function non-default object syntax
const myEightVar = 'eight is string';
export { myEightVar, fourFn };

