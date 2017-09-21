var express = require('express');
var router = express.Router();

var $ = require('../controller/userController');

/**
*
* URL routes
* GET /users[/]  		=> user.list();
* GET /users/new 		=> user.new();
* GET /users/:id   		=> user.show();
* GET /users/:id/edit 	=> user.edit();
* POST /users[/]		=> user.create();
* PATCH	/users/:id		=> user.update();
* DELETE /users/:id		=> user.destory();
*
*/

router.get('/new', $.new);
router.get('/:id/edit', $.edit);

router.route('/').get($.list).post($.create);

router.route('/:id').patch($.update).get($.show).delete($.destroy);

module.exports = router;