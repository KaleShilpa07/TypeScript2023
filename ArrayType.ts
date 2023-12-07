//1
let Arr:string[]=["A","B","C"];
Arr[2]="D";
Arr.push("Hello");
//2
let Arr1:any[]=["ABC",123,true];
//3
let Arr2:[string,number,boolean]=["ABC",123,true];

//Print 2 table
var arr_names = new Array(11);
console.log("Print Two Table")
for (var i = 0; i < arr_names.length; i++) {
   arr_names[i] = i * 2;
   console.log(arr_names[i]);
}


//Array Constructor accepts comma separated values
var names:string[] = new Array("Mary","Tom","Jack","Jill") 
console.log("Print Names:")
for(var i = 0;i<names.length;i++) { 
   
   console.log(names[i]) 
}
console.warn(Arr)
console.warn(Arr1)
console.warn(Arr2)


 console.log("Array Traversal using for…in loop");
var j:any;
  var nums:number[] = [1001,1002,1003,1004] 

 for(j in nums) { 
    console.log(nums[j]) 
 } 

console.log("loop performs an index based array traversal");
var j;
var nums = [1001, 1002, 1003, 1004];

for (j in nums) {
   console.log(nums[j]);
}

console.log("Concat() =>")
let alpha = ["a", "b", "c",70,true]; 
let numeric= [1, 2, 3];

let alphaNumeric = alpha.concat(numeric); 
console.log("alphaNumeric : " + alphaNumeric );

