import mongoose from "mongoose";
import {writeSuccessfullLog, writeErrorLog} from "../middleware/logs";

export default async function connectDB(_0, _1, next){
    const databaseURL = "mongodb://127.0.0.1:27017/vidlyDB";
    await mongoose.connect(databaseURL)
    .then(() => {
        const message = `Connected to the database on: ${databaseURL}`;
        writeSuccessfullLog(200, message);
    })
    .catch(err => {
        const message = `Couldn't to connect to the database...\n${err}`;
        writeErrorLog(500, message);
    });
    next();
}