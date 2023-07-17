import Genre from "../models/genres";
import { validateGenre, validateUpdatedGenre} from "../middleware/validation";

export const createGenre = async function (req, res){
    try{
        const { error } = validateGenre(
                {
                    name: req.body.name
                }
            );

        if (error){
            return res.status(400).send(error.details[0].message);
        }
        
        let genre = await Genre
            .find({
                name: req.body.name
            });

        if (genre[0]){
            return res.status(404).send("This genre already exists.");
        }
        
        genre = await new Genre({
            name: req.body.name
        });

        const result = await genre.save();
        res.send(result);
    }
    catch(error){
        console.log(error.message);
        return res.status(500).send(error.message);
    }
}

export const getGenres = async function (req, res){
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
        return res.status(500).send(error.message);
    }
}

export const getGenre = async function (req, res){
    try{
        const { error } = validateGenre(
            {
                name: req.params.name
            }
        );

        if (error){
            return res.status(400).send(error.details[0].message);
        }
        
        const genre = await Genre
            .find({
                name: req.params.name
            });
            
        if (!genre){
            return res.status(404).send("This genre doesn't exist.");
        }

        res.send(genre[0]);
    }
    catch(error){
        console.log(error.message);
        return res.status(500).send(error.message);
    }
}

export const updateGenre = async function (req, res){
    try{
        const { error } = validateUpdatedGenre(
                {
                    oldName: req.params.name,
                    newName: req.body.name
                }
            );

        if (error){
            return res.status(400).send(error.details[0].message);
        }
        
        const genreParams = await Genre
            .find({
                name: req.params.name
            });
            
        if (!genreParams[0]){
            return res.status(404).send("The genre you want to update doesn't exist.");
        }

        const genreBody = await Genre
            .find({
                name: req.body.name
            });
            
        if (genreBody[0]){
            return res.status(404).send("The new genre you want to update already exists.");
        }

        const newGenre = await Genre.updateOne({
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
        return res.status(500).send(error.message);
    }
}

export const deleteGenre = async function (req, res){
    try{
        const { error } = validateGenre(
                {
                    name: req.params.name
                }
            );

        if (error){
            return res.status(400).send(error.details[0].message);
        }
        
        let genre = await Genre
            .find({
                name: req.params.name
            });
            
        if (!genre[0]){
            return res.status(404).send("This genre doesn't exist.");
        }

        genre = await Genre.deleteOne({
            name: req.params.name
        });

        res.send(genre);
    }
    catch(error){
        console.log(error.message);
        return res.status(500).send(error.message);
    }
}