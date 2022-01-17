const mongoose = require("mongoose");

const VoteSchema = new mongoose.Schema({
    value: {
        type: Number,
        required: true,
    },
});

const Vote = mongoose.model("Vote", VoteSchema);

module.exports = Vote;
