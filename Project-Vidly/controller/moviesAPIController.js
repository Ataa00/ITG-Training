import express from "express";
import Movie from "../models/movies";
import { validateMovie, validateMovieID } from "../middleware/validation";

export async function createMovie(req, res){
    try{
        const {error} = validateMovie(req.body);

        if (error){
            return res.status(400).send(error.details[0].message);
        }

        const movie = await new Movie({
            title: req.body.title,
            genre: req.body.genre,
            numberInStock: req.body.numberInStock,
            dailyRentalRate: req.body.dailyRentalRate
        });

        const result = await movie.save();

        return res.status(200).send(result);
    }
    catch(error){
        console.log(error.message);
        res.status(500).send(error.message)
    }
}

export async function getMovies(req, res){
    try{
        const movies = await Movie.find(
            {
            _id: {$exists: true}
            }
        );

        return res.status(200).send(movies);
    }
    catch(error){
        console.log(error.message);
        return res.status(500).send(error.message);
    }
}

export async function getMovie(req, res){
    try{
        const {error} = validateMovieID({
            movieID: req.params.movieID
        });
    
        if (error){
            return res.send(400, error.details[0].message);
        }
    
        const movie = await Movie.findById(req.params.movieID);
    
        if (!movie){
            return res.status(404).send("This movie doesn't exist.");
        }
    
        return res.status(200).send(movie);   
    }
    catch(error){
        console.log(error.message);
        res.status(500).send(error.message)
    }
}


export async function updateMovie(req, res){
    try{
        const {error} = validateMovieID(
            {
                movieID: req.params.movieID
            });
    
        if (error){
            return res.send(400, error.details[0].message);
        }
    
        let movie = await Movie.findById(req.params.movieID);
    
        if (!movie){
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
    
        return res.status(200).send(movie);
    }
    catch(error){
        console.log(error.message);
        res.status(500).send(error.message)
    }
}

export async function deleteMovie(req, res){
    try{
        const {error} = validateMovieID({
            movieID: req.params.movieID
        });
    
        if (error){
            return res.status(400).send(error.details[0].message);
        }
    
        let movie = await Movie.findById(req.params.movieID);
    
        if (!movie){
            return res.status(404).send("This movie doesn't exist.");
        }
    
        
        movie = await Movie.findByIdAndDelete(
            {
                _id: req.params.movieID
            }
        );
    
        return res.status(200).send(movie);
    }
    catch(error){
        console.log(error.message);
        res.status(500).send(error.message)
    }
}