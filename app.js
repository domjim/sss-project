var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get("/1", function(req,res){
  res.redirect("/project_1/index.html");
});

app.get("/2", function(req,res){
  res.redirect("/project_2/index.html");
});

// Port setting
app.listen(process.env.PORT || 3000, function(){
  console.log("server on!");
});
