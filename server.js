var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var path =require("path");
const { dirname } = require("path");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,"public")));

app.get("/", function(req,resp){
    resp.sendFile(path.join(__dirname+"/public/index.html"))
})
app.listen(8000);
console.log("server listening at 8000");