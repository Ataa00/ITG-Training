import mongoose from "mongoose";

const Genre = mongoose.model("Genre", new mongoose.Schema({
    name: {
        type: String,
        min: 2,
        max: 30,
        unique: true,
        required: true
    },
}));

export default Genre;