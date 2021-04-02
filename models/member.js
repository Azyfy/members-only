const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MemberSchema = new Schema (
    {
        username: { type: String, required: true, maxlength: 20 },
        password_hash: { type: String, required: true, minlength: 3 },
        club_member: { type: Boolean },

    }
);

module.exports = mongoose.model("Member", MemberSchema);