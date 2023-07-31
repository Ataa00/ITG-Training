import express from "express";
import { validateRental } from "../middleware/validation";
import { getRentals, createRental } from "../controller/rentalsAPIController";

const router = express.Router();

router.get("/", async (_, res) => await getRentals(_, res));

router.post("/", 
    (req, res, next) => validateRental(req, res, next),
    async (req, res) => await createRental(req, res)
    );


export default router;