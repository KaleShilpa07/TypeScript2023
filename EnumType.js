"use strict";
//Enum show the number value for every string
console.log("EnumType:=>");
var Value;
(function (Value) {
    Value[Value["Asmita"] = 0] = "Asmita";
    Value[Value["Nisha"] = 1] = "Nisha";
    Value[Value["Sita"] = 2] = "Sita";
    Value[Value["Geeta"] = 3] = "Geeta";
    Value[Value["Neeta"] = 4] = "Neeta";
})(Value || (Value = {}));
console.warn(Value.Nisha, Value.Asmita);
