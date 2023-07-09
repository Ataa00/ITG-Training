
import joi from "joi"

export default (timeZone) => {
    const schema = joi.object({
        "timeZoneName": joi.string().min(1).max(40).required()
    });

    return schema.validate(timeZone);
};