const Vote = require("../models/Vote");

exports.getDashboard = (req, res) => {
    Vote.find()
        .then((votes) => {
            res.status(200).json({
                success: true,
                message: votes,
            });
        })
        .catch((err) =>
            res.status(400).json({
                success: false,
                message: err,
            })
        );
};
