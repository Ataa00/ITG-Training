import express from "express";
import { getMovie, getMovies, createMovie, updateMovie, deleteMovie } from "../controller/moviesAPIController";

const router = express.Router();

router.get("/", async (req, res) => await getMovies(req, res));

router.get("/:movieID", async (req, res) => await getMovie(req, res));

router.post("/", async (req, res) => await createMovie(req, res));

router.put("/:movieID", async (req, res) => await updateMovie(req, res));

router.delete("/:movieID", async (req, res) => await deleteMovie(req, res));

export default router;