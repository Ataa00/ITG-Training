import { writeErrorLog, writeSuccessfullLog } from "../middleware/logs.js";
import User from "../models/users.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
    try {
        let user = await User.findOne({email: req.body.email});

        if (user){
            writeErrorLog(400, "This user already registered.");
            return res.status(400).send("This user already registered.");
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        
        user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });

        await user.save();

        writeSuccessfullLog(200, "User successfully registered");
        return res.status(200).send(user);   
    }
    catch (error) {
        writeErrorLog(error.message);
        return res.status(500).send(error.message);
    }
}