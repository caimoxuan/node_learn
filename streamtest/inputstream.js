var fs = require('fs');

var data = '';

var inputstream = fs.createReadStream('input.txt');

inputstream.setEncoding('utf-8');

inputstream.on('data', function(buf){
	
	data += buf;
	
});

inputstream.on('end', function(){
	
	console.log(data);
});

inputstream.on('error', function(e){
	
	console.log(e.stack);
	
});

console.log('结束');