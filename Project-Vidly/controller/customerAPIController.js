import Customer from "../models/customer";
import { validateCustomerID, validateCustomer } from "../middleware/validation";

export async function createCustomer(req, res){
    try{
        const { error } = validateCustomer(req.body);
        
        if (error){
            return res.status(400).send(error.details[0].message);
        }

        const customer = await new Customer({
            name: req.body.name,
            phoneNumber: req.body.phoneNumber,
            isGolden: req.body.isGolden
        });

        const result = await customer.save();

        res.status(200).send(result);
    }
    catch(error){
        console.log(error.message);
        res.status(500).send(error.message);
    }
}

export async function getCustomers(req, res){
    try{
        const customers = await Customer.find(
            {
                _id: {
                    $exists: true
                }
            }
        );

        res.status(200).send(customers);
    }
    catch(error){
        console.log(error.message);
        res.status(500).send(error.message);
    }
}

export async function getCustomer(req, res){
    try{
        const { error } = validateCustomerID(
            {
                customerID: req.params.customerID
            }
        );
        
        if (error){
            return res.status(400).send(error.details[0].message);
        }

        const customer = await Customer
        .findById(req.params.customerID);

        if (!customer){
            return res.status(404).send("This customer doesn't exist.");
        }

        res.send(customer);
    }
    catch(error){
        console.log(error.message);
        res.status(500).send(error.message);
    }
}

export async function updateCustomer(req, res){
    try{
        const { customerIDValidationError } = validateCustomerID(
                {
                    customerID: req.params.customerID
                }
            );
        
        if (customerIDValidationError){
            return res.status(400).send(error.details[0].message);
        }

        let customer = await Customer
        .findById({
            _id: req.params.customerID
        });

        if (!customer){
            return res.status(404).send("This customer doesn't exist.");
        }

        const { CustomerValidationError } = validateCustomer(req.body);
        
        if (CustomerValidationError){
            return res.status(400).send(error.details[0].message);
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

        res.send(customer);
    }
    catch(error){
        console.log(error.message);
        res.status(500).send(error.message);
    }
}

export async function deleteCustomer(req, res){
    try{
        const { error } = validateCustomerID({
            customerID: req.params.customerID
        });
        
        if (error){
            return res.status(400).send(error.details[0].message);
        }

        let customer = await Customer
        .findById({
            _id: req.params.customerID
        });

        if(!customer){
            return res.status(404).send("This customer doesn't exist.");
        }

        customer = await customer.deleteOne();

        res.send(customer);
    }
    catch(error){
        console.log(error.message);
        res.status(500).send(error.message);
    }
}