"use strict";
class User2 {
    setName(Name) {
        this.Name = Name;
    }
    dispName() {
        console.log(this.Name);
    }
    // private
    GetNameLen() {
        var _a;
        console.log((_a = this.Name) === null || _a === void 0 ? void 0 : _a.length);
    }
}
const Use1 = new User2;
Use1.setName('neha');
Use1.dispName();
Use1.GetNameLen();
