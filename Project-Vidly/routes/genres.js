
import express from "express";
import {getGenres, getGenre, createGenre, updateGenre, deleteGenre} from "../controller/genresAPIController";


const router = express.Router();

router.get("/", async (req, res) => getGenres(req, res));

router.get("/getGenre", async (req, res) => getGenre(req, res));

router.post("/addGenre", async (req, res) => createGenre(req, res));

router.put("/updateGenre", async (req, res) => updateGenre(req, res));

router.delete("/deleteGenre", async (req, res) => deleteGenre(req, res));

export default router;