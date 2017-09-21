
var events = require('events');

var eventEmitter = new events.EventEmitter();

//创建 事件处理程序

var connectHandler = function connected(){
	console.log('连接成功!');
		
	//触发data_received 事件
	eventEmitter.emit('data_received');
	
}

//绑定connection事件处理程序

eventEmitter.on('connection', connectHandler);

//使用匿名函数绑定data_received事件

eventEmitter.on('data_received', function(){
	console.log('收到数据');
});

//触发connection
eventEmitter.emit('connection');

eventEmitter.on('myfunction', function(){
	console.log('myfunction running !');
});

eventEmitter.emit('myfunction');


console.log("结束");