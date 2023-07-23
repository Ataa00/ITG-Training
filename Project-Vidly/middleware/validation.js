
import Joi from "joi"
import joiObjectid from "joi-objectid";
import {writeErrorLog} from "../middleware/logs";

Joi.Objectid = joiObjectid(Joi);

export const validateGenre = (req, res, next) => {
    const schema = Joi.object({ 
        name: Joi.string().required().max(20)
    });

    const { error } = schema.validate({
        name: (req.params.name || req.body.name)
    });

    if (error){
        writeErrorLog(400, error.details[0].message);
        return res.status(400).send(error.details[0].message);
    }

    next();
};

export const validateUpdatedGenre = (req, res, next) => {
    const schema = Joi.object({ 
        oldName: Joi.string().required().max(20),
        newName: Joi.string().required().max(20)
    });

    const { error } = schema.validate(
        {
            oldName: req.params.name,
            newName: req.body.name
        }
    );

    if (error){
        writeErrorLog(400, error.details[0].message);
        return res.status(400).send(error.details[0].message);
    }

    next();
};

export const validateCustomer = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(2).max(30).required(),
        phoneNumber: Joi.string().length(14).regex(/^[0-9]*$/),
        isGolden: Joi.boolean()
    });

    
    const { error } = schema.validate(req.body);
        
    if (error){
        writeErrorLog(400, error.details[0].message);
        return res.status(400).send(error.details[0].message);
    }

    next();
}

export const validateCustomerID = (req, res, next) => {
    const schema = Joi.object({ 
        customerID: Joi.Objectid().required()
    });
    
    const { error } = schema.validate(
        {
            customerID: req.params.customerID
        }
    );
    
    if (error){
        writeErrorLog(400, error.details[0].message);
        return res.status(400).send(error.details[0].message);
    }

    next();
};

export const validateMovie = (req, res, next) => {
    const movieSchema = Joi.object({
        title: Joi.string().min(0).max(30).required(),
        genreID: Joi.Objectid().required(),
        numberInStock: Joi.number(),
        dailyRentalRate: Joi.number()
    });

    const {error} = movieSchema.validate(req.body);

    if (error){
        writeErrorLog(400, error.details[0].message);
        return res.status(400).send(error.details[0].message);
    }

    next();
}

export const validateMovieID = (req, res, next) => {
    const movieSchema = Joi.object({
        movieID: Joi.Objectid().required()
    });

    const {error} = movieSchema.validate({
        movieID: req.params.movieID
    });

    if (error){
        writeErrorLog(400, error.details[0].message);
        return res.send(400, error.details[0].message);
    }

    next();
}