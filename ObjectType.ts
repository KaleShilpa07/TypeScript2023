// 1 solution :=> {RollNo:number,name:String,Email:string} this is the object types 
const Student:{RollNo:number,name:String,Email:string}={
    //  actual objects
    RollNo:1,
    name:"Shilpa Kale",
    Email:"Shilpa@gmail.com"

}
// Second Solution => Define all object types into one type and use simultaniusly..this is the object types
type TypaVal={Id:number,name:String,Email:string}
const User:TypaVal={
    //  actual objects
    Id:1,
    name:"Ankita Kale",
    Email:"Ankita@gmail.com"

}
const Employee:TypaVal={
    //  actual objects
    Id:1,
    name:"Seema Kale",
    Email:"Seema@gmail.com"
    

}
console.warn(Student)
console.warn(User)
console.warn(Employee)