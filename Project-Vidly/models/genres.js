import mongoose from "mongoose";

const Genre = mongoose.model("Genre", new mongoose.Schema({
    name: {
        type: String,
        minlength: 2,
        maxlength: 30,
        unique: true,
        required: true
    },
}));

export default Genre;