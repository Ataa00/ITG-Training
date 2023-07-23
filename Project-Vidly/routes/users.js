import express from "express";
import {validateUser} from "../middleware/validation.js";
import {createUser} from "../controller/usersAPIController.js";

const router = express.Router();

router.post("/",
    (req, res, next) => validateUser(req, res, next),
    async(req, res) => createUser(req, res)
);

export default router;