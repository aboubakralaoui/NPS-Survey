const jwt = require("jsonwebtoken");

module.exports = {
    isAuth: (req, res, next) => {
        const authHeader = req.body.token;
        if (!authHeader) {
            res.status(403).json({
                success: false,
                message: "Not authenticated",
            });
        }
        const token = authHeader.split(" ")[1];
        let decodedToken;
        try {
            decodedToken = jwt.verify(token, "secretkey");
        } catch (err) {
            res.status(500).json({ success: false, message: err });
        }
        if (!decodedToken) {
            res.status(401).json({
                success: false,
                message: "Not authenticated",
            });
        }
        return next();
    },
};
