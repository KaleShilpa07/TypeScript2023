// let A:string|number|undefined=10;
// let B:string|number|undefined=30;
// let C:string|number|undefined=undefined;
console.log('Use Alias:=>');
//Or
type VarValue=string|number|undefined;
let A:VarValue=10;
let B:VarValue=30;
let C:VarValue=undefined;

//StringsIsh type alias can be used in place of the type union with several members. 
//When applied to the logAllStrings() function:

type StringsIsh = string | string[] | null | undefined; //that is alias type

function logAllStrings(values: StringsIsh) {
  if (values === null || typeof values === 'undefined') return;

  if (typeof values === 'string') {
    console.log(values);
  } else {
    values.forEach(logAllStrings);
  }
}

logAllStrings('hello'); // Ok
logAllStrings(['hello', 'world']); // Also Ok
console.warn(logAllStrings)


