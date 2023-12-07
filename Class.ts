
class Users{
    Name:'' | undefined;
    Address:''| undefined;

    AddUser(Users: string)
    {
return `${Users} is added`
    }
    RemoveUser(Users:string){
        console.log(`${Users} is remove..`)
    }
}
let user1=new Users;
let res=user1.AddUser('Sumit');
user1.RemoveUser('Swara');
console.log('Show res:',res)

