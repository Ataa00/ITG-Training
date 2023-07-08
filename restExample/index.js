const home = require("./routes/home");
const courses = require("./routes/courses");
const startupDebugger = require("debug")("app:startup");
const dbDebugger = require("debug")("app:db");
const config = require("config");
const helmet = require("helmet");
const morgan = require("morgan");
const Joi = require("joi");
const logger = require("./middleware/logger");
const authenticator = require("./middleware/authenticator");
const express = require("express");
const app = express();

//Configure views
app.set("view engine", "ejs");
app.set("views", "./views");

//To use middleware functions
app.use(express.json());
app.use(express.urlencoded( {extended: true}));
app.use(express.static("public"));
app.use(helmet());
app.use("/", home);
app.use("/api/courses", courses);

//Configration
console.log(`Application Name: ${config.get("name")}`);
console.log(`Mail Server: ${config.get("mail.host")}`);
console.log(`Mail Password: ${config.get("mail.password")}`);

if(app.get("env") === "development"){
    app.use(morgan('tiny'));
    console.log("Morgane is enabled...")
    startupDebugger("Isnide startup debugger...");
}
//Development, testing, production...
console.log(`NODE_ENV: ${process.env.NODE_ENV}`); //Default value if it is not setted is undefined
console.log(`APP: ${app.get("env")}`); //Default value is Development

app.use(logger);

app.use(authenticator);

//DB debugger
dbDebugger("Inside DB debugger...");

//To set the Env variable we use in terminal => set => Windows or export for Linux " set PORT=5000"
var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listning to port ${port}...\nOpen home page: http://localhost:${port}/`);
});
