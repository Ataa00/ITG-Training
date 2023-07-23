import { writeErrorLog, writeSuccessfullLog } from "../middleware/logs.js";
import User from "../models/users.js";
import bcrypt from "bcrypt";

export const login = async (req, res) => {
    const user = await User.findOne({email: req.body.email});

    if (!user){
        writeErrorLog(400, "Invalid email or password");
        return res.status(400).send("Invalid email or password");
    }

    const isValidPassword = await bcrypt.compare(req.body.password, user.password);

    if (!isValidPassword){
        writeErrorLog(400, "Wrong password");
        return res.status(400).send("Wrong password");
    }

    writeSuccessfullLog(200, "Logged in...");
    return res.status(200).send("Logged in...");
}