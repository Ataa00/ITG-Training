import express from "express"
import { createCustomer, getCustomer, getCustomers, updateCustomer, deleteCustomer } from "../controller/CustomerAPIController";

const router = express.Router();

router.get("/", async (req, res) => getCustomers(req, res));

router.get("/getCustomer", async (req, res) => getCustomer(req, res));

router.post("/createCustomer", async (req, res) => createCustomer(req, res));

router.put("/updateCustomer", async (req, res) => updateCustomer(req, res));

router.delete("/deleteCustomer", async (req, res) => deleteCustomer(req, res));

export default router;