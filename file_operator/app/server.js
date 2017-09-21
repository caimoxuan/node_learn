var http = require("http");
var express = require("express");
var app = express();
var ejs = require("ejs");

var router = require("./route/route");

app.use("/", router);
app.engine('.html', ejs.__express);
app.set("view engine", "html");
app.set("views", "./view");

/*
http.createServer(function(request, response){
  response.writeHead(200, {"Context-Type":"text-plain"});
  response.end("Hello world!");
}).listen(8888);
*/

var server = app.listen(8888, function(){
  var address = server.address().address;
  var port = server.address().port;
  console.log("server is running at "+address + ":" + port);
});
