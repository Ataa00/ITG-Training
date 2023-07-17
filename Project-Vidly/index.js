import express from "express";
import home from "./routes/home";
import genre from "./routes/genres";
import customer from "./routes/customers";
import movie from "./routes/movies"
import connectDB from "./middleware/connectDB";
import {writeSuccessfullLog, writeErrorLog} from "./middleware/logs";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(connectDB);
app.use("/", home);
app.use("/api/genres", genre);
app.use("/api/customers", customer);
app.use("/api/movies", movie);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    const message = `Listning to port ${port}...\nOpen home page: http://127.0.0.1:${port}/`;
    console.log(message);
    writeSuccessfullLog(200, message);
});