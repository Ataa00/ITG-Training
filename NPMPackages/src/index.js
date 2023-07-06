
import moment from "moment-timezone";
import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send(moment.tz("Asia/Jerusalem").format("hh:mm:ss"));
});

const port = process.env.PORT || 5555;
app.listen(port, () => {
    console.log(`Server listning on : http://localhost:${port}`);
});