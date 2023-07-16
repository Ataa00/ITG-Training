import Customer from "../models/customer";
import { validateCustomerID, validateCustomer } from "../middleware/validation";

export async function createCustomer(req, res){
    try{
        const { error } = validateCustomer(req.body);
        
        if (error) return res.status(400).send(error.details[0].message);

        const customer = await new Customer({
            name: req.body.name,
            phoneNumber: req.body.phoneNumber,
            isGolden: req.body.isGolden
        });

        const result = await customer.save();

        res.send(result);
    }
    catch(exp){
        console.log(exp.message);
        const message = "Server message:\ncreateCustomer function. Iside customerAPIController\nError: " + exp.message;
        res.send(400, message);
    }
}

export async function getCustomers(req, res){
    try{
        const customers = await Customer.find();

        res.send(customers);
    }
    catch(exp){
        console.log(exp.message);
        const message = "Server message:\ngetCustomers function. Iside customerAPIController\nError: " + exp.message;
        res.send(500, message);
    }
}

export async function getCustomer(req, res){
    try{
        const { error } = validateCustomerID(req.body);
        
        if (error) return res.status(400).send(error.details[0].message);

        const customer = await Customer
        .findById(req.body.customerID);

        console.log(customer);

        if(!customer) return res.status(404).send("This customer does not exist.");

        res.send(customer);
    }
    catch(exp){
        console.log(exp.message);
        const message = "Server message:\ngetCustomer function. Iside customerAPIController\nError: "+ exp.message;
        res.send(400, message);
    }
}

export async function updateCustomer(req, res){
    try{
        const { error } = validateCustomerID({customerID: req.body.customerID});
        
        if (error) return res.status(400).send(error.details[0].message);

        let customer = await Customer
        .findById({
            _id: req.body.customerID
        });

        if(customer.length === 0) return res.status(404).send("This customer does not exist.");

        customer = await Customer.findOneAndUpdate(
            {
                _id: req.body.customerID
            },
            {
                $set: {
                    name: req.body.name,
                    phoneNumber: req.body.phoneNumber,
                    isGolden: req.body.isGolden
                }
            },
            {new: true}
        );

        res.send(customer);
    }
    catch(exp){
        console.log(exp.message);
        const message = "Server message:\nupdateCustomer function. Iside customerAPIController\nError: " + exp.message;
        res.send(400, message);
    }
}

export async function deleteCustomer(req, res){
    try{
        const { error } = validateCustomerID(req.body);
        
        if (error) return res.status(400).send(error.details[0].message);

        let customer = await Customer
        .findById({
            _id: req.body.customerID
        });

        if(customer.length === 0) return res.status(404).send("This customer does not exist.");

        customer = await Customer.deleteOne(
            {
                _id: req.body.customerID
            });

        res.send(customer);
    }
    catch(exp){
        console.log(exp.message);
        const message = "Server message:\ndeleteCustomer function. Iside customerAPIController\nError: " + exp.message;
        res.send(400, message);
    }
}