var express = require("express");
var ejs = require("ejs");
var app = express();
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
// require("jsdom").env("", function(err, window) {
//     if (err) {
//         console.error(err);
//         return;
//     }
 
//     var $ = require("jquery")(window);
// });



app.use("view engine","ejs");

app.get("/",function(req,res){
    // $("li").on("click", function(){
    //     console.log("aaya");
    // });
    JSDOM.fromFile("views/index.ejs").then(dom => {
        console.log(dom.serialize());
    });
    res.render("index.ejs");
});

app.listen(process.env.PORT,process.env.IP,function(){
   console.log("server is on"); 
});