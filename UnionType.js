"use strict";
console.log("UnionType=>");
function Combine(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else {
        return a.toString() + b.toString();
    }
}
console.warn(Combine(20, 30));
console.warn(Combine('amol', ' nita'));
