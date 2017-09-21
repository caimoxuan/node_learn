var mysql = require('mysql');

var connection = mysql.createConnection({
	host		: 'localhost',
	user		: 'root',
	password	: '',
	port		: '3306',
	database	: 'cmx',
});
	
connection.connect();

/*
var sql = 'select * from admin';

connection.query(sql,function(err,data){
	if(err){
		console.log('[SLECT ERROR] :'+err.message);
		return;
	}
	
	console.log('select----------------------------');
	console.log(data);
	console.log('end------------------------------');
	
});
*/

var delsql = 'delete from admin where adminId = 2';
connection.query(delsql,function(err, result){
	if(err){
		console.log('[del errr]:'+err.message);
	}
	
	console.log('delete ------------');
	console.log(result);
	console.log('end ---------------');
	
});

/*
var addsql = 'insert into admin(adminId, username, password, realname)values(0,?,?,?)';
var addparam = ['路飞','lufei123','蒙奇·D·路飞'];

connection.query(addsql, addparam, function(err, result){
	if(err){
		console.log('[add err]:'+err.message);
	}
	
	console.log('add ---------------');
	console.log(result);
	console.log('end ---------------');
	
});
*/

connection.end();