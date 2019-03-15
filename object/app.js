var obj = {
    sayHello: " Hello"
}

console.log(obj.sayHello);
console.log(obj['sayHello']);

var prop = "sayHello";
console.log(obj[prop]);

//func va arr
var arr = [];
arr.push(function(){
    console.log("Hello nodejs 1");
    
});
arr.push(function(){
    console.log("Hello nodejs 2");
    
});
arr.push(function(){
    console.log("Hello nodejs 3");
    
});

arr[0]();

//for
arr.forEach(function(item){
    item()

});