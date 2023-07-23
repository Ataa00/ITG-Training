import Genre from "../models/genres";
import {writeSuccessfullLog, writeErrorLog} from "../middleware/logs";

export const createGenre = async function (req, res){
    try{
        let genre = await Genre
            .find({
                name: req.body.name
            });

        if (genre[0]){
            writeErrorLog(404, "This genre already exists.");
            return res.status(404).send("This genre already exists.");
        }
        
        genre = await new Genre({
            name: req.body.name
        });

        const result = await genre.save();
        writeSuccessfullLog(200, "Genre created successfully.");
        res.send(result);
    }
    catch(error){
        console.log(error.message);
        writeErrorLog(500, error.message);
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
        
        writeSuccessfullLog(200, "Genres retrieved successfully.");
        res.send(genres);
    }
    catch(error){
        console.log(error.message);
        writeErrorLog(500, error.message);
        return res.status(500).send(error.message);
    }
}

export const getGenre = async function (req, res){
    try{
        const genre = await Genre
            .find({
                name: req.params.name
            });
            
        if (!genre[0]){
            writeErrorLog(404, "This genre doesn't exists.");
            return res.status(404).send("This genre doesn't exist.");
        }

        writeSuccessfullLog(200, "Genre retrieved successfully.");
        res.send(genre[0]);
    }
    catch(error){
        console.log(error.message);
        writeErrorLog(500, error.message);
        return res.status(500).send(error.message);
    }
}

export const updateGenre = async function (req, res){
    try{
        const genreParams = await Genre
            .find({
                name: req.params.name
            });
            
        if (!genreParams[0]){
            writeErrorLog(404, "The genre you want to update doesn't exist.");
            return res.status(404).send("The genre you want to update doesn't exist.");
        }

        const genreBody = await Genre
            .find({
                name: req.body.name
            });
            
        if (genreBody[0]){
            writeErrorLog(404, "The new genre you want to update doesn't exist.");
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

        writeSuccessfullLog(200, "Genre updated successfully.");
        res.send(newGenre);
    }
    catch(error){
        console.log(error.message);
        writeErrorLog(500, error.message);
        return res.status(500).send(error.message);
    }
}

export const deleteGenre = async function (req, res){
    try{
        let genre = await Genre
            .find({
                name: req.params.name
            });
            
        if (!genre[0]){
            writeErrorLog(404, "This genre doesn't exists.");
            return res.status(404).send("This genre doesn't exist.");
        }

        genre = await Genre.deleteOne({
            name: req.params.name
        });

        writeSuccessfullLog(200, "Genre deleted successfully.");
        res.send(genre);
    }
    catch(error){
        console.log(error.message);
        writeErrorLog(500, error.message);
        return res.status(500).send(error.message);
    }
}