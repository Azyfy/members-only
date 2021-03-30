const Member = require("../models/member");

const async = require("async");
const { body, validationResult } = require("express-validator");

exports.member_create_get = (req, res, next) => {
    res.render("member_create_form", { title: "Create an account" });
};

exports.member_create_post = [

    // vali and sani
    body("username", "Username cant be less than 3chars").trim().isLength({min: 3}).escape(),

    (req, res, next) => {
        
        const errors = validationResult(req);

        const member = new Member( 
            {
                username: req.body.username,
            }
        );

        if(!errors.isEmpty()) {
            res.render("member_create_form", { title: "Create an account", errors: errors.array() });
        }
        else {

            Member.findOne({ "username": req.body.username })
                .exec( (err, found_member) =>  {
                    if(err) { return next(err); }

                    if(found_member) {
                        const exists = "Username already exists";
                        res.render("member_create_form", { title: "Create an account", exists: exists });
                   }
                   else {
                       member.save( (err) => {
                        if(err) { return next(err); }
                        res.redirect("/");
                       });
                   }
                });
        }

    }
];