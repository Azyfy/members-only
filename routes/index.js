var express = require('express');
var router = express.Router();

const passport = require("passport");


const member_controller = require ("../controllers/member");

function checkLoggedIn(req, res, next) {
  if (!req.isAuthenticated()) { return next(); }
  res.redirect('/clubhouse')
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// create account get and post
router.get("/create_account", checkLoggedIn, member_controller.member_create_get);
router.post("/create_account", member_controller.member_create_post);

// login get and post
router.get("/login", checkLoggedIn, member_controller.member_login_get);
router.post("/login",  passport.authenticate("local", {
  successRedirect: "/clubhouse",
  failureRedirect: "/login"
}));

// logout
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
