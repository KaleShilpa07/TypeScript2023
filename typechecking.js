"use strict";
function Sum(Num1, Num2) {
    if (typeof Num1 === 'number' && typeof Num2 === 'number') {
        return Num1 + Num2;
    }
    else {
        return new Error("Value Are not Numer...");
    }
}
console.warn(Sum("Ankit", 30));
