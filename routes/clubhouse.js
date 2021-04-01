const express = require('express');
const router = express.Router();

const passport = require("passport");

router.get('/',  function(req, res, next) {
    if(req.isAuthenticated()) {
        res.render('clubhouse', { title: 'Clubhouse' });
    }
    else {
        res.redirect("/login");
    }
    });

  module.exports = router;