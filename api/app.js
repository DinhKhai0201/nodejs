var http = require("http");
var fs = require("fs");

http.createServer(function(req,res){
    if (req.url === "/" || req.url ==="/index.html"){
        fs.createReadStream(__dirname+"/index.html").pipe(res);
    }
    else {
    res.writeHead(200,{'Conten-Type':'application/json'});
    var obj = {
        firstname : "Hoa",
        lastname : "Mai"
    }
    res.end(JSON.stringify(obj));
    }
}).listen(1337,"127.0.0.1",function(){
    console.log("server is on");
})
