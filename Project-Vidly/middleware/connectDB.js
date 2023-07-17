import mongoose from "mongoose";
import {writeSuccessfullLog, writeErrorLog} from "../middleware/logs";

export default async function connectDB(req, res, next){
    const DBURL = "mongodb://127.0.0.1:27017/vidlyDB";
    await mongoose.connect(DBURL)
    .then(() => {
        const message = `Connected to the DataBase on: ${DBURL}` 
        console.log();
        writeSuccessfullLog(200, message);
    })
    .catch(err => {
        const message = `Couldn't to connect to the DB...\n${err}`;
        console.error(message);
        writeErrorLog(500, message);
    });
    next();
}