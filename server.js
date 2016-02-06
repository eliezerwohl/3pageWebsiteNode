var express = require("express");
var app = express();
var PORT = 8090;

app.use("/static", express.static("public"));

app.get("/", function(req, res){
  res.sendFile(process.cwd() + "/home.html")
});

app.listen(PORT, function(){
  console.log("listening on port %s", PORT);
});