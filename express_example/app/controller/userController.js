var User = require('../model/user');

exports.list = function(req, res, next){
	console.log(req.method + ' /users => list, query : ' +JSON.stringify(req.query));
	User.getAll(function(err, user){
		if(err){
			console.err(err);
			return;
		}
		console.log(user);
		res.render('user/index', {
			user : user
		})
	});
};

exports.new = function (req, res, next){
	console.log(req.method + ' /user/new => new, query: ' + JSON.stringify(req.query));
	
	res.render('user/new', {
		user : {
			"_action" : "new",
			"name":"hello",
			"password":"123456"
		}
	})
	
};

exports.show = function (req, res, next) {
  console.log(req.method + ' /user/:id => show, query: ' + JSON.stringify(req.query) + 
    ', params: ' + JSON.stringify(req.params));
  var id = req.params.id;

  User.getById(id, function(err, user) {
    console.log(user);
    res.render('user/show', {
      user : user
    })
  });
};

exports.edit = function (req, res, next) {
  console.log(req.method + ' /user/:id/edit => edit, query: ' + JSON.stringify(req.query) + 
    ', params: ' + JSON.stringify(req.params));

  var id = req.params.id; 

  User.getById(id, function (err, user) {
    console.log(user);
    user._action = 'edit';

    res.render('user/edit', {
      user : user
    })
  });
};

exports.create = function (req, res, next) {
  console.log(req.method + ' /user => create, query: ' + JSON.stringify(req.query) + 
    ', params: ' + JSON.stringify(req.params) + ', body: ' + JSON.stringify(req.body));

    User.create({name: req.body.name,password: req.body.password}, function (err, user) {
		if(err){
			console.log(err);
			return;
		}
	  console.log("添加成功!");
      console.log(user);
      res.render('user/new', {
		
        user : user
      })
    });
};


exports.update = function (req, res, next) {
  console.log(req.method + ' /user/:id => update, query: ' + JSON.stringify(req.query) + 
    ', params: ' + JSON.stringify(req.params) + ', body: ' + JSON.stringify(req.body));

    var id = req.params.id; 

    User.updateById(id,{name: req.body.name,password: req.body.password}, function (err, user) {
      console.log(user);

      res.json({
        data:{
          redirect : '/user/' + id
        },
        status:{
          code : 0,
          msg  : 'delete success!'
        }
      });
    });
};

exports.destroy = function (req, res, next) {
  console.log(req.method + ' /user/:id => destroy, query: ' + JSON.stringify(req.query) + 
    ', params: ' + JSON.stringify(req.params) + ', body: ' + JSON.stringify(req.body));

  var id = req.params.id;
  User.deleteById(id, function (err) {
    console.log(err);
    res.json({
      data:{},
      status:{
        code : 0,
        msg  : 'delete success!'
      }
    });
  });
};


