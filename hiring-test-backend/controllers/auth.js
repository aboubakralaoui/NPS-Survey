
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");


exports.login = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log("User ", username);
    console.log("Password ", password);
    User.findOne({ username: username })
        .then((user) => {
            if (!user) {
                res.status(401).json({
                    success: false,
                    message: "A user with this username could not be found.",
                });
            } else {
                console.log("there is a user");
                loadedUser = user;
                return bcrypt.compare(password, user.password);
            }
        })
        .then((isEqual) => {
            if (!isEqual) {
                res.status(401).json({
                    success: false,
                    message: "Wrong password!",
                });
            }
            console.log("it's Equal");
            const token = jwt.sign(
                {
                    user: loadedUser,
                },
                "secretkey",
                { expiresIn: "1h" }
            );
            res.status(200).json({
                success: true,
                token: token,
            });
        })
        .catch((err) => {
            res.status(422).json({ success: false, message: err });
        });
};
