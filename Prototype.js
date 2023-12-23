// const user = {
//     name: 'John',
//     printInfo: function () {
//     console.log(`My name is ${this.name}.`);
//     }
//     };

//     const admin = Object.create(user);
//     admin.printInfo(); // My name is Nick

//     admin.name = "Nick"; // Remember that "name" is a property set on "admin" but not on "use
//     admin.printInfo(); // My name is Nick

"use strict";

function Person(fname, lname) {
  this.fname = fname;
  this.lname = lname;
}

Person.prototype.getFullName = function () {
  return this.fname + " " + this.lname;
};

Person.prototype.age = 24;

const person1 = new Person("sajid", "hussain");
const person2 = new Person("alex", "tom");

console.log(person1.getFullName());
console.log(person2.getFullName());
console.log(person1.__proto__);
console.log(person1.__proto__ == Person.prototype); //both are equal
