import mongoose from "mongoose";

const Customer = mongoose.model(
    "Customer", 
    new mongoose.Schema({
        name: {
            type: String,
            required: true,
            minlength: 2,
            maxlength: 30
        },
        phoneNumber: {
            type: String,
            match: /^[0-9]*$/,
            minlength: 14,
            maxlength: 14
        },
        isGolden: Boolean
    })
);

export default Customer;