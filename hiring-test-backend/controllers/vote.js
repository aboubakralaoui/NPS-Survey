const Vote = require("../models/Vote");

exports.getVote = (req, res) => {
    const value = req.body.value;
    console.log("Value", value);
    if (!value) {
        res.status(400).json({
            success: false,
            message: "Value is Required",
        });
    }
    const newVote = new Vote({
        value,
    });
    newVote
        .save()
        .then((value) => {
            res.status(201).json({
                success: true,
                message: "Vote Created Successfully",
            });
        })
        .catch((err) =>
            res.status(400).json({
                success: false,
                message: "Failed to Create Vote",
                error: err,
            })
        );
};
