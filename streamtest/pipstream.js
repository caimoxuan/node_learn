var fs = require('fs');

var readstream = fs.createReadStream('input.txt');

var writestream  = fs.createWriteStream('outpipe.txt');

readstream.pipe(writestream);

console.log('管道流结束');