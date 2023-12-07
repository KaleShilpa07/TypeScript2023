class Emp{
    // Name="";
    // Address="";
    // City="";
//     constructor(name:string,address:string,city:string){
//         this.Name=name;
//         this.Address=address;
//         this.City=city;
//  } or

//shorthand intialization...
constructor(public Name:string,public Address:string,public City:string){}

 DIspValue(){
    console.log(this.Name,this.Address,this.City);
 }
}
const E1=new Emp('Shilpa','pune','pune');
E1.DIspValue();