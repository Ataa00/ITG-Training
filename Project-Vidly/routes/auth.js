import express from "express";
import { validatelogin } from "../middleware/validation";
import { login } from "../controller/authAPIController";

const router = express.Router();

router.post("/",
    (req, res, next) => validatelogin(req, res, next),
    async (req, res) => login(req, res)
    ); 

export default router;