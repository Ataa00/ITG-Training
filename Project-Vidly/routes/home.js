
import express from "express";
import {movies} from "../middleware/data";

const router = express.Router();

router.get("/", (req, res) => {
    res.send(movies);
});

export default router;