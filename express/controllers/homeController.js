var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({extended: false});
var jsonParser = bodyParser.json();
module.exports =function(app){
    app.get("/",function(req,res){
        console.log("Cookie ",req.cookies);
        //res.send(`
        //<link href ="/assets/style.css" rel ="stylesheet" type ="text/css">
        //<h1>Hello </h1>
        //<p>Request time : ${req.requestTime}</p>
        //`);
        res.render("index");
    });
    
      //app.get("/user/:id",function(req,res){
      //    res.cookie(`User ${req.params.id}`)
          //res.send(`<h1> User : ${req.params.id} </h1>`)
          //req.query.qstr
          //res.render("user",{ID: req.params.id});
      //    res.render("user",{ID: req.params.id, queryString: req.query.qstr});
      //})  ;
    
    app.post("/login",urlencodedParser,function(req,res){
        res.send("Welcome," + req.body.username); 
        console.log(req.body.username);
        console.log(req.body.password);
        
    });
    app.post("/loginjson",jsonParser,function(req,res){
        res.send("ok");
        console.log(req.body.firstName);
        console.log(req.body.lastName);
    });
};