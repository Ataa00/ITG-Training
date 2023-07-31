import Customer from "../models/customer";
import {writeSuccessfullLog, writeErrorLog} from "../middleware/logs"

export const createCustomer = async function (req, res){
    try{
        const customer = await new Customer({
            name: req.body.name,
            phoneNumber: req.body.phoneNumber,
            isGolden: req.body.isGolden
        });

        await customer.save();
        writeSuccessfullLog(200, "Customer created successfully.");
        res.status(200).send(customer);
    }
    catch(error){
        writeErrorLog(500, error.message);
        res.status(500).send(error.message);
    }
}

export const getCustomers = async function (req, res){
    try{
        const customers = await Customer.find(
            {
                _id: {
                    $exists: true
                }
            }
        );

        writeSuccessfullLog(200, "Customers retrieved successfully.");
        res.status(200).send(customers);
    }
    catch(error){
        writeErrorLog(500, error.message);
        res.status(500).send(error.message);
    }
}

export const getCustomer = async function (req, res){
    try{
        const customer = await Customer
        .findById(req.params.customerID);

        if (!customer){
            writeErrorLog(404, "This customer doesn't exist.");
            return res.status(404).send("This customer doesn't exist.");
        }

        writeSuccessfullLog(200, "Customer retrieved successfully.");
        res.send(customer);
    }
    catch(error){
        writeErrorLog(500, error.message);
        res.status(500).send(error.message);
    }
}

export const updateCustomer = async function (req, res){
    try{
        let customer = await Customer
        .findById({
            _id: req.params.customerID
        });

        if (!customer){
            writeErrorLog(404, "This customer doesn't exist.");
            return res.status(404).send("This customer doesn't exist.");
        }

        customer = await customer.updateOne(
            {
                $set: {
                    name: req.body.name,
                    phoneNumber: req.body.phoneNumber,
                    isGolden: req.body.isGolden
                }
            }
        );

        writeSuccessfullLog(200, "Customers updated successfully.");
        res.send(customer);
    }
    catch(error){
        writeErrorLog(500, error.message);
        res.status(500).send(error.message);
    }
}

export const deleteCustomer = async function (req, res){
    try{
        let customer = await Customer
        .findById({
            _id: req.params.customerID
        });

        if(!customer){
            writeErrorLog(404, "This customer doesn't exist.");
            return res.status(404).send("This customer doesn't exist.");
        }

        customer = await customer.deleteOne();
        writeSuccessfullLog(200, "Customers deleted successfully.");
        res.send(customer);
    }
    catch(error){
        writeErrorLog(500, error.message);
        res.status(500).send(error.message);
    }
}