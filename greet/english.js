var greeting = require("./greeting.json");
var sayHello = function(){
    console.log(greeting.en);
}

module.exports= sayHello;