
import express from "express";
import timeZone from "./routes/timeZone.js"

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));

app.use("/", timeZone);


const port = process.env.PORT || 5555;
app.listen(port, () => {
    console.log(`Server listning on : http://localhost:${port}`);
});