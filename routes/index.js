var express = require('express');
var router = express.Router();

const member_controller = require ("../controllers/member");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// create account get and post
router.get("/create_account", member_controller.member_create_get);
router.post("/create_account", member_controller.member_create_post);

module.exports = router;
