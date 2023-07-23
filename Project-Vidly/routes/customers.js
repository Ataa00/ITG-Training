import express from "express";
import { validateCustomerID, validateCustomer } from "../middleware/validation";
import { createCustomer, getCustomer, getCustomers, updateCustomer, deleteCustomer } from "../controller/CustomerAPIController";

const router = express.Router();

router.get("/", async (req, res) => getCustomers(req, res));

router.get("/:customerID",
    (req, res, next) => validateCustomerID(req, res, next),
    async (req, res) => getCustomer(req, res));

router.post("/",
    (req, res, next) => validateCustomer(req, res, next),
    async (req, res) => createCustomer(req, res));

router.put("/:customerID",
    (req, res, next) => validateCustomerID(req, res, next),
    (req, res, next) => validateCustomer(req, res, next),
    async (req, res) => updateCustomer(req, res));

router.delete("/:customerID",
    (req, res, next) => validateCustomerID(req, res, next),
    async (req, res) => deleteCustomer(req, res));

export default router;