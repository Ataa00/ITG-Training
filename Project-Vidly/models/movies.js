import mongoose from "mongoose";
import genre, { genreSchema } from "./genres.js";

const Movie = mongoose.model("Movie", new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 30
    },
    genre: genreSchema,
    numberInStock: Number,
    dailyRentalRate: Number
}));

export default Movie;