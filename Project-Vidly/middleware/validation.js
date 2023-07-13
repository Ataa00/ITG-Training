
import Joi from "joi"

export function validateTypeOfMovies(genre){
    const schema = Joi.object({ 
        type: Joi.string().required().max(20)
    });

    return schema.validate(genre);
};

export function validateGenreID(genre){
    const schema = Joi.object({ 
        genreID: Joi.string().required().max(30)
    });

    return schema.validate(genre);
};