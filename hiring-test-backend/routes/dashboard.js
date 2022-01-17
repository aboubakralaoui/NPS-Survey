const express = require("express");

const router = express.Router();

const dashboardController = require("../controllers/dashboard");

const { isAuth } = require("../middlewares/isAuth");

router.get(
    "/dashboard",

    dashboardController.getDashboard
);

module.exports = router;
