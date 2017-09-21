var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/*
var MongooseDao = require('mongoosedao');

var userSchema = new Schema({
	"name":"String","password":"String"
});


var User = mongoose.model('User', userSchema);
var UserDao = new MongooseDao(User);

module.exports = UserDao;
*/

var db = mongoose.createConnection('mongodb://127.0.0.1:27017/test');

var userSchema = new Schema({
	name:{type : String},
	password:{type : String}
	
});

db.on("error", function (error) { 
	console.log("数据库连接失败：" + error); 
}); 

db.on("open", function () { 
	console.log("——数据库连接成功！——"); 
});	

var User = db.model('User', userSchema);

module.exports = User;