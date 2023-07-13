
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
        customerID: Joi.string().required().max(24).min(24)
    });

    return schema.validate(customerID);
};