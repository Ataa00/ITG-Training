import express from "express";
import Movie from "../models/movies";
import { validateMovie, validateMovieID } from "../middleware/validation";
import {writeSuccessfullLog, writeErrorLog} from "../middleware/logs"

export const createMovie = async function (req, res){
    try{
        const {error} = validateMovie(req.body);

        if (error){
            writeErrorLog(400, error.details[0].message);
            return res.status(400).send(error.details[0].message);
        }

        const movie = await new Movie({
            title: req.body.title,
            genre: req.body.genre,
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

export const  getMovies = async function (req, res){
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
        const {error} = validateMovieID({
            movieID: req.params.movieID
        });
    
        if (error){
            writeErrorLog(400, error.details[0].message);
            return res.send(400, error.details[0].message);
        }
    
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
        const {error} = validateMovieID(
            {
                movieID: req.params.movieID
            });
    
        if (error){
            writeErrorLog(400, error.details[0].message);
            return res.send(400, error.details[0].message);
        }
    
        let movie = await Movie.findById(req.params.movieID);
    
        if (!movie){
            writeErrorLog(404, "This movie doesn't exist.");
            return res.status(404).send("This movie doesn't exist.");
        }
    
        
        movie = await movie.updateOne(
            {
                _id: req.params.movieID
            }, 
            {
                $set: {
                    title: req.body.title,
                    genre: req.body.genre,
                    numberInStock: req.body.numberInStock,
                    dailyRentalRate: req.body.dailyRentalRate
                }
            },
            {new: true}
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
        const {error} = validateMovieID({
            movieID: req.params.movieID
        });
    
        if (error){
            writeErrorLog(400, error.details[0].message);
            return res.status(400).send(error.details[0].message);
        }
    
        let movie = await Movie.findById(req.params.movieID);
    
        if (!movie){
            writeErrorLog(404, "This movie doesn't exist.");
            return res.status(404).send("This movie doesn't exist.");
        }
    
        
        movie = await Movie.findByIdAndDelete(
            {
                _id: req.params.movieID
            }
        );
        
        writeSuccessfullLog(200, "Movie deleted successfully.");
        return res.status(200).send(movie);
    }
    catch(error){
        console.log(error.message);
        writeErrorLog(500, error.message);
        res.status(500).send(error.message)
    }
}