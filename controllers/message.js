const Message = require("../models/message");

const async = require("async");
const { body, check, validationResult } = require("express-validator");

exports.message_clubhouse = (req, res, next) => {

    Message.find().populate("member").exec( (err, list_message) => {
        if(err) { return next(err); }
        res.render("clubhouse",  { title: 'Clubhouse', messages: list_message });
    });
};

exports.message_create_get = (req, res, next) => {
    res.render("message_form", { title: "Message" })
};

exports.message_create_post = [

    body("message", "Message is too short.").trim().isLength({min: 5}).escape(),

    (req, res, next) => {

        const errors = validationResult(req);

        const message = new Message(
            {
                message: req.body.message,
                member: res.locals.currentUser.id
            }
        );

        if(!errors.isEmpty()) {
            res.render("message_form", { title: "Message", errors: errors.array() });
        }
        else {
            message.save( (err) => {
                if(err) { return next(err); }
                res.redirect("/clubhouse");
            });
        }
    }

];

exports.message_create_get = (req, res, next) => {
    res.render("message_form", { title: "Message" })
};

exports.message_delete = (req, res, next) => {

    Message.findByIdAndRemove(req.params.id, (err) => {
        if (err) { return next(err); }

        res.redirect("/clubhouse");
    });
};