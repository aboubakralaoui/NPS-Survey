const express = require("express");

const router = express.Router();

const voteController = require("../controllers/vote");


router.post("/vote", voteController.getVote);

module.exports = router;
