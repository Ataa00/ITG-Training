import Genre from "../models/genres";

// router.get("/:type", (req, res) => {

    // const genre = genres.find(g => g.type === req.params.type);
    // if(!genre) return res.status(404).send("This genre doesn't exist.")

    // res.send(movies.filter(m =>  m.type === genre.type));
// });

// router.post("/addGenre", (req, res) => {
    // const genres = getGenres();
    // console.log(genres);
    // const genre = genres.find(g => g.type === req.body.type);
    // console.log(genre);
    // if(genre) return res.status(404).send("This genre is already exist.");
    
    // const { error } = validateTypeOfMovies(req.body);

    // if(error) return res.status(400).send(error.details[0].message);
    
    // creaeteGenre({
    //     "name" : req.body.type
    // })
    // res.send(getGenres);
// });

// router.put("/:type", (req, res) => {

//     const genre = genres.find(g => g.type === req.params.type);

//     if(!genre) return res.status(404).send("This genre doesn't exist.");
    
//     const { error } = validateTypeOfMovies(req.body);
    
//     if(error) return res.status(400).send(error.details[0].message);

//     genre.type = req.body.type;

//     res.send(genre);
// });

// router.delete("/:type", (req, res) => {

//     const genre = genres.find(g => g.type === req.params.type);

//     if(!genre) return res.status(404).send("This genre doesn't exist.");
    
//     const { error } = validateTypeOfMovies(req.params);
    
//     if(error) return res.status(400).send(error.details[0].message);

//     genres.splice(genre, 1);

//     res.send(genres);
// });

// const genres = getGenres();
//     if(genre) return res.status(404).send("This genre is already exist.");
    
//     const { error } = validateTypeOfMovies(req.body);

//     if(error) return res.status(400).send(error.details[0].message);
    
//     creaeteGenre({
//         "name" : req.body.type
//     })
//     res.send(getGenres);
export async function creaeteGenre(req, res){
    const genres = await Genre.find();
    console.log(genres);
    // const genre = genres.find(g => g.type === req.body.type);
    // console.log(genre);
    // const genre = new Genre({
    //     name: name
    // });

    // try{
    //    const result = await genre.save();
    //    console.log(result);
    // }
    // catch(exp){
    //     for(err in exp.errors){
    //         console.log(exp.errors[err]);
    //     }
    // }
}

export async function getGenres(req, res){
    const genres = await Genre
        .find();
    console.log(genres);
    res.send(genres[0]);
}

export async function getGenre(name){
    const genre = await Genre
        .find({
            name: name
        });
    if(!genre){
        console.log(`There is no genre with this name: ${name}`);
        return;
    }
    return genre;
}

export async function updateGenre(name){
    const genre = await Genre.update({
        name: name
    },
    {
        $set: {
            name: name
        }
    });    
}

export async function deleteGenre(name){
    const genre = await Genre.delete({
        name: name
    });    
}