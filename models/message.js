const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MessageSchema = new Schema (
    {
        message: {type: String, required: true},
        member: { type: Schema.Types.ObjectId, ref: "Member", required: true },
        date: { type: Date, default: Date.now },
    }
);

module.exports = mongoose.model("Message", MessageSchema);