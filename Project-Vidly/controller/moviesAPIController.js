import express from "express";
import Movie from "../models/movies";
import { validateMovie, validateMovieID } from "../middleware/validation";

export async function createMovie(req, res){
    const {error} = validateMovie(req.body);

    if (error) return res.send(400, error.details[0].message);

    const movie = await new Movie({
        title: req.body.title,
        genre: req.body.genre,
        numberInStock: req.body.numberInStock,
        dailyRentalRate: req.body.dailyRentalRate
    });

    const result = await movie.save();

    return res.status(200).send(result);
}

export async function getMovies(req, res){
    const movies = await Movie.find();

    return res.send(200, movies);
}

export async function getMovie(req, res){
    const {error} = validateMovieID(req.body);

    if (error) return res.send(400, error.details[0].message);

    const movie = await Movie.findById(req.body.movieID);

    if (!movie) return res.send(404, "This movie ID doesn't exit.");

    return res.status(200).send(movie);
}


export async function updateMovie(req, res){
    const {error} = validateMovieID(
        {
            "movieID": req.body.movieID
        });

    if (error) return res.send(400, error.details[0].message);

    let movie = await Movie.findById(req.body.movieID);

    if (!movie) return res.send(404, "This movie ID doesn't exit.");

    
    movie = await Movie.findByIdAndUpdate(
        {
            _id: req.body.movieID
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

export async function deleteMovie(req, res){
    const {error} = validateMovieID(req.body);

    if (error) return res.send(400, error.details[0].message);

    let movie = await Movie.findById(req.body.movieID);

    if (!movie) return res.send(404, "This movie ID doesn't exit.");

    
    movie = await Movie.findByIdAndDelete(
        {
            _id: req.body.movieID
        }
    );

    return res.status(200).send(movie);
}