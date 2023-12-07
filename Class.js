"use strict";
class Users {
    AddUser(Users) {
        return `${Users} is added`;
    }
    RemoveUser(Users) {
        console.log(`${Users} is remove..`);
    }
}
let user1 = new Users;
let res = user1.AddUser('Sumit');
user1.RemoveUser('Swara');
console.log('Show res:', res);
