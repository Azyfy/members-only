const express = require('express');
const router = express.Router();

const passport = require("passport");

const message_controller = require("../controllers/message");
const member_controller = require("../controllers/member");

function checkAuthentication(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login')
}

router.get('/', message_controller.message_clubhouse);


router.get("/create_message", checkAuthentication, message_controller.message_create_get);
router.post("/create_message", checkAuthentication, message_controller.message_create_post);

router.get("/join_club", checkAuthentication, member_controller.member_club)

module.exports = router;