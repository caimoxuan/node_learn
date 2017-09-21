var http = require('http');
var url = require('url');

function start(router){
	
	function onRequest(request, response){
		var urlpathname = url.parse(request.url).pathname;
		
		console.log('request path is :' + urlpathname);
		
		router(urlpathname);
		
		response.writeHead(200, {'content-Type':'text/plain'});
		response.write('hello world!');
		response.end();
		
	}
	
	http.createServer(onRequest).listen(8888);
	console.log('server has started!');
	
}

exports.start=start;