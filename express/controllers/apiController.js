module.exports=function(app){
    app.get("/api/user/:id",function(req,res){
        var result ={
            firstname: "a",
            lastname : "b"
        };
        req.json(result);
    });
    app.post("/api/user",function(req,res){
        //create new and save to database
        
    })
    app.put("/api/user",function(req,res){
        //update new and save to database
    
    })
    app.delete("/api/user/:id",function(req,res){
        
    })
};