
import express from "express";
import {validateTypeOfMovies} from "../middleware/validation";
import {getGenres, getGenre, creaeteGenre, updateGenre, deleteGenre} from "../controller/genresAPIController";


const router = express.Router();

router.get("/", (req, res) => getGenres(req, res));

router.get("/:type", async (req, res) => getGenre(req, res));

router.post("/addGenre", async (req, res) => creaeteGenre(req, res));

router.put("/updateGenre", async (req, res) => updateGenre(req, res));

router.delete("/deleteGenre", async (req, res) => deleteGenre(req, res));

export default router;