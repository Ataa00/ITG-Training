import Genre from "../models/genres";
import { validateGenreID, validateTypeOfMovies } from "../middleware/validation";

export async function createGenre(req, res){
    try{
        const { error } = validateTypeOfMovies(req.body);

        if(error) return res.status(400).send(error.details[0].message);
        
        let genre = await Genre
            .find({
                name: req.body.type
            });

        if(genre.length > 0) return res.status(404).send("This genre is already exist.");
        
        genre = await new Genre({
            name: req.body.type
        });

        const result = await genre.save();
        res.send(result);
    }
    catch(ex){
        console.log(ex);
        res.status(500).send("Server Error:\ncreaeteGenre function. Inside GenreAPIController");
    }
}

export async function getGenres(req, res){
    try{
        const genres = await Genre.find();

        res.send(genres);
    }
    catch(ex){
        console.log(ex);
        res.status(500).send("Server Error:\ngetGenres function. Inside GenreAPIController")
    }
}

export async function getGenre(req, res){
    try{
        const genre = await Genre
            .find({
                name: req.params.type
            });
            
        if(!genre){
            if(!genre) return res.status(404).send("This genre doesn't exist.");
        }
        res.send(genre[0]);
    }
    catch(ex){
        console.log(ex);
        res.status(500).send("Server Error:\ngetGenre function. Inside GenreAPIController")
    }
}

export async function updateGenre(req, res){
    try{
        const { error } = validateTypeOfMovies({"type": req.body.type});

        if(error) return res.status(400).send(error.details[0].message);
        
        let genre = await Genre
            .find({
                _id: req.body.genreID
            });
            
        if(genre.length === 0) return res.status(404).send("This genre doesn't exist.");

        genre = await Genre.findByIdAndUpdate({
            _id: req.body.genreID
        },
        {
            $set: {
                name: req.body.type
            }
        }, 
        {
            new: true
        });

        res.send(genre);
    }
    catch(ex){
        console.log(ex.message);
        res.status(500).send("Server Error:\nupdateGenre function. Inside GenreAPIController")
    }
}

export async function deleteGenre(req, res){
    try{
        const { error } = validateGenreID({"genreID": req.body.genreID});

        if(error) return res.status(400).send(error.details[0].message);
        
        let genre = await Genre
            .find({
                _id: req.body.genreID
            });
            
        if(genre.length === 0) return res.status(404).send("This genre doesn't exist.");

        genre = await Genre.deleteOne({
            _id: req.body.genreID
        });

        res.send(genre);
    }
    catch(ex){
        console.log(ex.message);
        res.status(500).send("Server Error:\ndeleteGenre function. Inside GenreAPIController")
    }
}