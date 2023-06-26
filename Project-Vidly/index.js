
const Joi = require("joi");
const express = require("express");

const app = express();

const genres = ["All", "Action", "Comedy", "Horror", "Adveture"];

var movies = [
    {
        "id" : 1,
        "type" : "Action",
        "name" : "Fast and furious"
    },
    {
        "id" : 2,
        "type" : "Comedy",
        "name" : "Mr.Bean"
    },
    {
        "id" : 3,
        "type" : "Horror",
        "name" : "Exorcism of Emily Rose"
    },
    {
        "id" : 4,
        "type" : "Adveture",
        "name" : "Iron man"
    },
];

app.get("/", (req, res) => {
    res.send(movies);
});

app.get("/api/genres", (req, res) => {
    res.send(movies);
});

app.get("/api/genres/:type", (req, res) => {
    const type = geners.filter(g => g === req.params.type);


    
    const moviesWithSameType = movies.filter(m =>  m.type );


});

function validateTypeOfMovies(type){
    const schema = Joi.object({
        type : Joi.string().required().max(20)
    });

    return schema.validate(type);
};


app.listen(3000);