
const Joi = require("joi");
const express = require("express");
const home = require("./routes/home");

const app = express();

app.use(express.json());
app.use("/", home);
app.use("/api/genres", home);

var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listning to port ${port}...\nOpen home page: http://localhost:${port}/`);
});
