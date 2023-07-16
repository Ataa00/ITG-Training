import express from "express";
import { getMovie, getMovies, createMovie, updateMovie, deleteMovie } from "../controller/moviesAPIController";

const router = express.Router();

router.get("/", async (req, res) => await getMovies(req, res));

router.get("/getMovie", async (req, res) => await getMovie(req, res));

router.post("/addMovie", async (req, res) => await createMovie(req, res));

router.put("/updateMovie", async (req, res) => await updateMovie(req, res));

router.delete("/deleteMovie", async (req, res) => await deleteMovie(req, res));

export default router;