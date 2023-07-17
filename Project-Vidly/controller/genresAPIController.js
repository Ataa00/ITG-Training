import Genre from "../models/genres";
import { validateGenre, validateUpdatedGenre} from "../middleware/validation";

export async function createGenre(req, res){
    try{
        const { error } = validateGenre(
                {
                    name: req.body.name
                }
            );

        if(error) return res.status(400).send(error.details[0].message);
        
        let genre = await Genre
            .find({
                name: req.body.name
            });

        if(genre[0]) return res.status(404).send("This genre already exists.");
        
        genre = await new Genre({
            name: req.body.name
        });

        const result = await genre.save();
        res.send(result);
    }
    catch(error){
        console.log(error.message);
        res.status(500).send(error.message);
    }
}

export async function getGenres(req, res){
    try{
        const genres = await Genre.find(
            {
                name: {
                    $exists: true
                }
            }
        );

        res.send(genres);
    }
    catch(error){
        console.log(error.message);
        res.status(500).send(error.message);
    }
}

export async function getGenre(req, res){
    try{
        const { error } = validateGenre(
            {
                name: req.params.name
            }
        );

        if(error) return res.status(400).send(error.details[0].message);
        
        const genre = await Genre
            .find({
                name: req.params.name
            });
            
        if(!genre){
            if(!genre) return res.status(404).send("This genre doesn't exist.");
        }
        res.send(genre[0]);
    }
    catch(error){
        console.log(error.message);
        res.status(500).send(error.message);
    }
}

export async function updateGenre(req, res){
    try{
        const { error } = validateUpdatedGenre(
                {
                    oldName: req.params.name,
                    newName: req.body.name
                }
            );

        if(error) return res.status(400).send(error.details[0].message);
        
        let genreParams = await Genre
            .find({
                name: req.params.name
            });
            
        if(!genreParams[0]) return res.status(404).send("The genre you want to update doesn't exist.");

        let genreBody = await Genre
            .find({
                name: req.body.name
            });
            
        if(genreBody[0]) return res.status(404).send("The new genre you want to update already exists.");

        let newGenre = await Genre.updateOne({
            name: req.params.name
        },
        {
            $set: {
                name: req.body.name
            }
        });

        res.send(newGenre);
    }
    catch(error){
        console.log(error.message);
        res.status(500).send(error.message);
    }
}

export async function deleteGenre(req, res){
    try{
        const { error } = validateGenre(
                {
                    name: req.params.name
                }
            );

        if(error) return res.status(400).send(error.details[0].message);
        
        let genre = await Genre
            .find({
                name: req.params.name
            });
            
        if(!genre[0]) return res.status(404).send("This genre doesn't exist.");

        genre = await Genre.deleteOne({
            name: req.params.name
        });

        res.send(genre);
    }
    catch(error){
        console.log(error.message);
        res.status(500).send(error.message);
    }
}