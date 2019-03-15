var http = require("http");
var fs = require("fs");

http.createServer(function(req,res){
    res.writeHead(200,{'Conten-Type':'text/html'});
    fs.createReadStream(__dirname+"/index.html").pipe(res);
    //var html =fs.readFileSync(__dirname+"/index.html","utf8");
    //res.end(html);

}).listen(1339,"127.0.0.1")