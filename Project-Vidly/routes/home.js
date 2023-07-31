
import express from "express";
import {getGenres} from "../controller/genresAPIController";

const router = express.Router();

router.get("/", async (_, res) =>  getGenres(_, res));

export default router;