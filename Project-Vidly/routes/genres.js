
import express from "express";
import {validateTypeOfMovies} from "../middleware/validation";
import {genres, movies} from "../middleware/data";


const router = express.Router();

router.get("/", (req, res) => {
    res.send(movies);
});

router.get("/:type", (req, res) => {

    const genre = genres.find(g => g.type === req.params.type);
    if(!genre) return res.status(404).send("This genre doesn't exist.")

    res.send(movies.filter(m =>  m.type === genre.type));
});

router.post("/addGenre", (req, res) => {

    const genre = genres.find(g => g.type === req.body.type);
    console.log(genre);
    if(genre) return res.status(404).send("This genre is already exist.");
    
    const { error } = validateTypeOfMovies(req.body);

    if(error) return res.status(400).send(error.details[0].message);
    
    genres.push({
        "id" : genres.length+1,
        "type" : req.body.type
    });
    res.send(genres);
});

router.put("/:type", (req, res) => {

    const genre = genres.find(g => g.type === req.params.type);

    if(!genre) return res.status(404).send("This genre doesn't exist.");
    
    const { error } = validateTypeOfMovies(req.body);
    
    if(error) return res.status(400).send(error.details[0].message);

    genre.type = req.body.type;

    res.send(genre);
});

router.delete("/:type", (req, res) => {

    const genre = genres.find(g => g.type === req.params.type);

    if(!genre) return res.status(404).send("This genre doesn't exist.");
    
    const { error } = validateTypeOfMovies(req.params);
    
    if(error) return res.status(400).send(error.details[0].message);

    genres.splice(genre, 1);

    res.send(genres);
});

export default router;