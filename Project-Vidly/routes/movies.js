import express from "express";
import { getMovie, getMovies, createMovie, updateMovie, deleteMovie } from "../controller/moviesAPIController";
import { validateMovie, validateMovieID } from "../middleware/validation";

const router = express.Router();

router.get("/", async (_, res) => await getMovies(_, res));

router.get("/:movieID",
    (req, res, next) => validateMovieID(req, res, next),
    async (req, res) => await getMovie(req, res));

router.post("/",
    (req, res, next) => validateMovie(req, res, next),
    async (req, res) => await createMovie(req, res));

router.put("/:movieID",
    (req, res, next) => validateMovieID(req, res, next),
    (req, res, next) => validateMovie(req, res, next),
    async (req, res) => await updateMovie(req, res));

router.delete("/:movieID",
    (req, res, next) => validateMovieID(req, res, next),
    async (req, res) => await deleteMovie(req, res));

export default router;