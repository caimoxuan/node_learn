var express = require('express');

var app = express();

app.get('/', function(req, rsp){
	
	rsp.send('Hello world!');
});

app.post('/', function(req, rsp){
	rsp.send('this is post request');
});

app.get('/home/ab*cd', function(req, rsp){
	rsp.send('this is /home/ab*cd');
});


var server = app.listen(8081, function(){
	var address  = server.address().address;
	var port = server.address().port;
	
	console.log('server is running in '+address+":"+port);
	
});