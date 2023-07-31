
import BaseJoi from "joi";
import joiTimeZone from "joi-tz";

export default (timeZone) => {

    const joi = BaseJoi.extend(joiTimeZone);

    const schema = joi.object({
        "timeZoneName": joi.timezone().required()
    });

    return schema.validate(timeZone);
};