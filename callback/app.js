var firstF= function(){
    console.log("I am first");
}
var secondF = function(){
    setTimeout(firstF,5000);
    console.log("i am second");
}

secondF();