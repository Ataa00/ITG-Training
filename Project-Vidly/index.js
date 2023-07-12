import express from "express";
import home from "./routes/home";
import genre from "./routes/genres";
import connectDB from "./middleware/connectDB"; 

const DB = async () => await connectDB();
DB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use("/", home);
app.use("/api/genres", genre);

let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listning to port ${port}...\nOpen home page: http://localhost:${port}/`);
});