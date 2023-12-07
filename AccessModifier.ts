class User2{
    private Name:'' | undefined;
    public setName(Name:any){
        this.Name=Name;
    }
    dispName(){
        console.log(this.Name)

    }
 // private
   GetNameLen(){
        console.log(this.Name?.length)
 
    }
}
const Use1=new User2;
Use1.setName('neha');
Use1.dispName();
Use1.GetNameLen();
