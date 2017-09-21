var fs = require('fs');

var data = '测试写入流，写入的数据1';

var outputstream = fs.createWriteStream('output.txt');

outputstream.write(data, 'utf-8');

outputstream.end();

outputstream.on('finish', function(){
	console.log('结束写入');
});

outputstream.on('error', function(e){
	console.log(e.stack);
});

