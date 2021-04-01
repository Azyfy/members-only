var express = require('express');
var router = express.Router();

const passport = require("passport");


const member_controller = require ("../controllers/member");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// create account get and post
router.get("/create_account", member_controller.member_create_get);
router.post("/create_account", member_controller.member_create_post);

// login get and post
router.get("/login", member_controller.member_login_get);
router.post("/login",  passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/login"
}));

// logout
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
