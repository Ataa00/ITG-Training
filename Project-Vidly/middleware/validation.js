
function validateTypeOfMovies(genre){
    const schema = Joi.object({
        type : Joi.string().required().max(20)
    });

    return schema.validate(genre);
};

module.exports = validateTypeOfMovies;