var server = require('./routserver');
var router = require('./router');

server.start(router.route);