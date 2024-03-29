import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 2,
        maxlength: 80,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        minlength: 8,
        maxlength: 255
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 1042
    }
});

const User = mongoose.model("User", userSchema);

export default User;