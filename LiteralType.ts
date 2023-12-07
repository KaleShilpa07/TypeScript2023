console.log("LiteralType=>")
function Combine(a:number | string ,b:number | string,type:'as-Number'|'as-string'){
if(type==='as-Number')
   {
     return (+a) + (+b);
    }
   else{
    return a.toString() + b.toString();

   }

}
console.warn(Combine(20,30,'as-Number'))
console.warn(Combine('amol',' nita','as-string'))