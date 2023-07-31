import express from "express";
import {validateUser} from "../middleware/validation.js";
import {register} from "../controller/usersAPIController.js";

const router = express.Router();

router.post("/",
    (req, res, next) => validateUser(req, res, next),
    async(req, res) => register(req, res)
);

export default router;