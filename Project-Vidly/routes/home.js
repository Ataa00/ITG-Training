
import express from "express";
import {getGenres} from "../controller/genresAPIController";

const router = express.Router();

router.get("/", async (req, res) =>  getGenres(req, res));

export default router;