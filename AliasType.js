"use strict";
// let A:string|number|undefined=10;
// let B:string|number|undefined=30;
// let C:string|number|undefined=undefined;
console.log('Use Alias:=>');
let A = 10;
let B = 30;
let C = undefined;
function logAllStrings(values) {
    if (values === null || typeof values === 'undefined')
        return;
    if (typeof values === 'string') {
        console.log(values);
    }
    else {
        values.forEach(logAllStrings);
    }
}
logAllStrings('hello'); // Ok
logAllStrings(['hello', 'world']); // Also Ok
console.warn(logAllStrings);
