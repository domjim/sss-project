var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get("/", function(req,res){
  res.redirect("index");
});

// Port setting
app.listen(3000, function(){
  console.log("server on!");
});
