import express from "express";
import { validateRental } from "../middleware/validation";
import { getRentals, createRental } from "../controller/rentalsAPIController";

const router = express.Router();

router.get("/", async (req, res) => await getRentals(req, res));

router.post("/", 
    (req, res, next) => validateRental(req, res, next),
    async (req, res) => await createRental(req, res)
    );


export default router;