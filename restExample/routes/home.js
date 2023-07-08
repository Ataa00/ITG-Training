
const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
    response.render("index", {title: "Pug home page", message: "hello Pug..."});
});

module.exports = router;