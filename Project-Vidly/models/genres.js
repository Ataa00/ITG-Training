import mongoose from "mongoose";

export const genreSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 2,
        maxlength: 30,
        unique: true,
        required: true
    },
});

const Genre = mongoose.model("Genre", genreSchema);

export default Genre;