import express from "express";
import Movie from "../models/movies";
import {writeSuccessfullLog, writeErrorLog} from "../middleware/logs"
import Genre from "../models/genres";

export const createMovie = async function (req, res){
    try{
        const genre = await Genre.findById(req.body.genreID);

        if (!genre){
            writeErrorLog(404, "This genre doesn't exists.");
            return res.status(404).send("This genre doesn't exist.");
        }

        const movie = await new Movie({
            title: req.body.title,
            genre: {
                _id: genre._id,
                name: genre.name
            },
            numberInStock: req.body.numberInStock,
            dailyRentalRate: req.body.dailyRentalRate
        });

        const result = await movie.save();

        writeSuccessfullLog(200, "Movie created successfully.");
        return res.status(200).send(result);
    }
    catch(error){
        console.log(error.message);
        writeErrorLog(500, error.message);
        res.status(500).send(error.message)
    }
}

export const getMovies = async function (req, res){
    try{
        const movies = await Movie.find(
            {
            _id: {$exists: true}
            }
        );

        writeSuccessfullLog(200, "Movies retrieved successfully.");
        return res.status(200).send(movies);
    }
    catch(error){
        console.log(error.message);
        writeErrorLog(500, error.message);
        return res.status(500).send(error.message);
    }
}

export const getMovie = async function (req, res){
    try{
        const movie = await Movie.findById(req.params.movieID);
    
        if (!movie){
            writeErrorLog(404, "This movie doesn't exist.");
            return res.status(404).send("This movie doesn't exist.");
        }

        writeSuccessfullLog(200, "Movie retrieved successfully.");
    
        return res.status(200).send(movie);   
    }
    catch(error){
        console.log(error.message);
        writeErrorLog(500, error.message);
        res.status(500).send(error.message)
    }
}


export const updateMovie = async function (req, res){
    try{
        let movie = await Movie.findById(req.params.movieID);
    
        if (!movie){
            writeErrorLog(404, "This movie doesn't exist.");
            return res.status(404).send("This movie doesn't exist.");
        }
        
        const genre = await Genre.findById(req.body.genreID);
        
        if (!genre){
            writeErrorLog(404, "This genre doesn't exists.");
            return res.status(404).send("This genre doesn't exist.");
        }
        
        movie = await movie.updateOne( 
            {
                $set: {
                    title: req.body.title,
                    genre: {
                        _id: genre._id,
                        name: genre.name
                    },
                    numberInStock: req.body.numberInStock,
                    dailyRentalRate: req.body.dailyRentalRate
                }
            }
        );
        
        writeSuccessfullLog(200, "Movie updated successfully.");

        return res.status(200).send(movie);
    }
    catch(error){
        console.log(error.message);
        writeErrorLog(500, error.message);
        res.status(500).send(error.message)
    }
}

export const deleteMovie = async function (req, res){
    try{
        let movie = await Movie.findById(req.params.movieID);
    
        if (!movie){
            writeErrorLog(404, "This movie doesn't exist.");
            return res.status(404).send("This movie doesn't exist.");
        }
    
        
        movie = await movie.deleteOne();
        
        writeSuccessfullLog(200, "Movie deleted successfully.");
        return res.status(200).send(movie);
    }
    catch(error){
        console.log(error.message);
        writeErrorLog(500, error.message);
        res.status(500).send(error.message)
    }
}