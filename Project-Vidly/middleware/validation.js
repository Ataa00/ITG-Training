
import Joi from "joi"
import JoiObjectId from "joi-objectid";
const myJoiObjectId = JoiObjectId(Joi);

export function validateGenre(genre){
    const schema = Joi.object({ 
        name: Joi.string().required().max(20)
    });

    return schema.validate(genre);
};

export function validateGenreID(genre){
    const schema = Joi.object({ 
        genreID: myJoiObjectId().required()
    });

    return schema.validate(genre);
};

export function validateCustomer(customer){
    const schema = Joi.object({
        name: Joi.string().min(2).max(30).required(),
        phoneNumber: Joi.string().min(14).max(14).regex(/[0-9]/),
        isGolden: Joi.boolean()
    });

    return schema.validate(customer);
}

export function validateCustomerID(customerID){
    const schema = Joi.object({ 
        customerID: myJoiObjectId().required()
    });

    return schema.validate(customerID);
};

export function validateMovie(movie){
    const movieSchema = Joi.object({
        title: Joi.string().min(0).max(30).required(),
        genre: Joi.object().keys({
            name: Joi.string().required().max(20)
        }),
    numberInStock: Joi.number(),
    dailyRentalRate: Joi.number()
    });

    return movieSchema.validate(movie);
}

export function validateMovieID(movie){
    const movieSchema = Joi.object({
        movieID: myJoiObjectId().required()
    });

    return movieSchema.validate(movie);
}