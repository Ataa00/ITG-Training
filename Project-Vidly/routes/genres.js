
import express from "express";
import {getGenres, getGenre, createGenre, updateGenre, deleteGenre} from "../controller/genresAPIController";
import { validateCustomer, validateGenre, validateUpdatedGenre } from "../middleware/validation";


const router = express.Router();

router.get("/", async (req, res) => getGenres(req, res));

router.get("/:name",
    (req, res, next) => validateGenre(req, res, next),
    async (req, res) => getGenre(req, res));

router.post("/",
    (req, res, next) => validateGenre(req, res, next),
    async (req, res) => createGenre(req, res));

router.put("/:name",
    (req, res, next) => validateUpdatedGenre(req, res, next),
    async (req, res) => updateGenre(req, res));

router.delete("/:name",
    (req, res, next) => validateGenre(req, res, next),
    async (req, res) => deleteGenre(req, res));

export default router;