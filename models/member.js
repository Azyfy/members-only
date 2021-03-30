const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MemberSchema = new Schema (
    {
        username: { type: String, required: true, maxlength: 20 }
    }
);

module.exports = mongoose.model("Member", MemberSchema);