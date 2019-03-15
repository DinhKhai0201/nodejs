'use strict';

class Person {
    constructor(firstName, lastName) {
        this.firstName=firstName;
        this.lastName=lastName;
    }
//dinh nghia ham
sayHello(){
    console.log("hello, "+this.firstName + " " + this.lastName);
}
}
var hoa = new Person("Hoa","Mai");
hoa.sayHello();

var phuong = new Person("Phuong","Yen");
phuong.sayHello();
console.log(hoa.__proto__);

