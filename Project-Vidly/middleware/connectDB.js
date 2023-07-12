import mongoose from "mongoose";

export default async function connectDB(){
    mongoose.connect("mongodb://127.0.0.1:27017/vidlyDB")
    .then(() => {
        console.log("Connected...");
        
    })
    .catch(err => console.error("Couldn't to connect to the DB...", err));
}