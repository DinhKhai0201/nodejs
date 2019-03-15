function Person(name,password) {
    this.name=name;
    this.password=password;
}
Person.prototype.getName= function(){
    return this.name;
}
Person.prototype.getPassword= function(){
    return this.password;
}
Person.prototype.getLevel =function () {
    return this.level;
}
Person.prototype.level="admin";
function User(name) {
    this.name=name;
}
User.prototype=new Person();

var person = new Person("a","b");
console.log(person.getName);