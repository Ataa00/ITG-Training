
import express from "express";
import {getGenres} from "../models/genres.js";

const router = express.Router();

router.get("/", (req, res) => {
    console.log("inside home");
    const get =  async (genres) => genres = await getGenres()
        .then(() => res.send(genres));
    get();
});

export default router;