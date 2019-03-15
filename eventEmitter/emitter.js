var Emitter = require("events");
var event = require("./eventConfig").events;
var emitter = new Emitter();

emitter.on(event.BAD_SCORE,function(){
    console.log("Mot mon nao do bi diem kem");
});
emitter.on(event.BAD_SCORE,function(){
    console.log("Da co mon diem kem,can thong bao den phu huynh");
});

//co  1 bang diem
var score = [10,4];

for(var s of score){
    if(s<5) {
        console.log("Diem thap qua", s);
        emitter.emit(event.BAD_SCORE);
    }
}

console.log(`hello 
    nhieu
    dong
`);
