export default function (){
    console.log('fooFn1 has ran');
}

export const fooFn2 = () => {
    console.log('fooFn2 has ran');
}

function fooFn3(){
    console.log('fooFn3 has ran');
}


export {fooFn3}