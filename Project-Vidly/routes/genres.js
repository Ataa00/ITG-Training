
import express from "express";
import {getGenres, getGenre, createGenre, updateGenre, deleteGenre} from "../controller/genresAPIController";


const router = express.Router();

router.get("/", async (req, res) => getGenres(req, res));

router.get("/:name", async (req, res) => getGenre(req, res));

router.post("/", async (req, res) => createGenre(req, res));

router.put("/:name", async (req, res) => updateGenre(req, res));

router.delete("/:name", async (req, res) => deleteGenre(req, res));

export default router;