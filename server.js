var express = require("express");
var app = express();
var PORT = process.env.PORT || 8090;

app.use("/static", express.static("public"));

app.get("/", function(req, res){
  res.sendFile(process.cwd() + "/home.html")
});


app.get("/reg", function(req, res){
  res.sendFile(process.cwd() + "/register.html")
});

app.get("/dash", function(req, res){
  res.sendFile(process.cwd() + "/dashboard.html")
});

app.listen(PORT, function(){
  console.log("listening on port %s", PORT);
});