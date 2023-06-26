
const Joi = require("joi");
const express = require("express");

const app = express();

app.use(express.json());

const genres = [
    {
        "id" : 1,
        "type":"All"
    },
    {
        "id" : 1,
        "type":"Action"
    },
    {
        "id" : 1,
        "type":"Comedy"
    },
    {
        "id" : 1,
        "type":"Horror"
    }, 
    {
        "id" : 1,
        "type":"Adveture"
    }
];

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

    const genre = genres.find(g => g.type === req.params.type);
    if(!genre) return res.status(404).send("This genre doesn't exist.")

    res.send(movies.filter(m =>  m.type === genre.type));
});

app.post("/api/genres/addGenre", (req, res) => {

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

app.put("/api/genres/:type", (req, res) => {

    const genre = genres.find(g => g.type === req.params.type);

    if(!genre) return res.status(404).send("This genre doesn't exist.");
    
    const { error } = validateTypeOfMovies(req.body);
    
    if(error) return res.status(400).send(error.details[0].message);

    genre.type = req.body.type;

    res.send(genre);
});

app.delete("/api/genres/:type", (req, res) => {

    const genre = genres.find(g => g.type === req.params.type);

    if(!genre) return res.status(404).send("This genre doesn't exist.");
    
    const { error } = validateTypeOfMovies(req.params);
    
    if(error) return res.status(400).send(error.details[0].message);

    genres.splice(genre, 1);

    res.send(genres);
});


function validateTypeOfMovies(genre){
    const schema = Joi.object({
        type : Joi.string().required().max(20)
    });

    return schema.validate(genre);
};


var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listning to port ${port}...\nOpen home page: http://localhost:${port}/`);
});
