var express = require("express");
var app=express();
var cookieParser = require("cookie-parser");
var apiController=require("/.controllers/apiController");
var homeController=require("/.controllers/homeController");
//var bodyParser = require("body-parser");


var port = 3002;
app.use("/assets",express.static(__dirname+"/public"));
app.use(cookieParser());

app.set("view engine","ejs");
app.get("/",function(req,res,next){
    console.log("request url ", req.url);
    req.requestTime= new Date();
    next();
});
apiController(app);
homeController(app);

app.listen(port,function(){
    console.log("Server is listening ",port);
});
