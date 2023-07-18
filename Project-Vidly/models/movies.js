import mongoose from "mongoose";
import genre, { genreSchema } from "./genres.js";

const Movie = mongoose.model("Movie", new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 200,
        trim: true
    },
    genre: {
        _id: {
            type: mongoose.Types.ObjectId,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    },
    numberInStock: {
        type: Number,
        required: true,
        min: 0,

    },
    dailyRentalRate: {
        type: Number,
        required: true,
        min: 0,

    }
}));

export default Movie;