export default function sayBlahServiceFn($location) {
    this.blahVar = 'blah from sayBlah service';

    this.blahFn = function (arg) {
        console.log('blahFn from sayBlah service ran', arg);
        $location.search({});
    };
}/*  */