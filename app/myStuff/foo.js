export function fooFn(){
    console.log("fooFn");
}


function fooFn2(){
    console.log("fooFn2");
}

export { fooFn2 }; 

export default function(){
    console.log('default from foo')
}


export const colorBlue = 'blue';

const colorGreen = 'green';

export { colorGreen }; 