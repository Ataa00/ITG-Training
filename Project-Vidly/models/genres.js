import mongoose from "mongoose";

const Genre = new mongoose.model("Genre", new mongoose.Schema({
    name: {
        type: String,
        min: 2,
        max: 30,
        unique: true,
        required: true
    },
}));

export default Genre;