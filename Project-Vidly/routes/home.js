
const express = require("express");
const router = express.Router();
const {movies} = require("../middleware/data");

router.get("/", (req, res) => {
    res.send(movies);
});

module.exports = router;