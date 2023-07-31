
import express from "express";
import timeZone from "./routes/timeZone.js"

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

app.use("/css", express.static("public/css"));
app.use("/js", express.static("public/js"));

app.use("/", timeZone);


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listning on : http://localhost:${port}`);
});