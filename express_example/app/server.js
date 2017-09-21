var router = require('./route/userRoute');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', router);
app.set('view engine', 'pug');
app.set('views', './view');


var server = app.listen(8082,function(){
	var address  = server.address().address;
	var port = server.address().port;
	
	console.log('server is running in '+address+":"+port);
});