import Customer from "../models/customer.js";
import Movie from "../models/movies.js";
import Rental, {addRental} from "../models/rentals.js";
import {writeSuccessfullLog, writeErrorLog} from "../middleware/logs"


export const createRental = async (req, res) => {
    try{
        const customer = await Customer
        .findById(req.body.customerID)
        .select({
            name: 1,
            phoneNumber: 1,
            isGolden: 1
        });

        if (!customer){
            writeErrorLog(400, "The customer you required doesn't exist.");
            return res.status(400).send("The customer you required doesn't exist.")
        }

        const movie = await Movie
        .findById(req.body.movieID)
        .select({
            title: 1,
            dailyRentalRate: 1,
            numberInStock: 1
        });

        if (!movie){
            writeErrorLog(404, "The movie you required doesn't exist.");
            return res.status(404).send("The movie you required doesn't exist.")
        }

        if (movie.numberInStock === 0) {
            writeErrorLog(404, `There is no ${movie.title} movie in the stock.`);
            return res.status(404).send(`There is no ${movie.title} movie in the stock.`);
        }

        const rental = await new Rental({
            customer: {
                _id: customer._id,
                name: customer.name,
                phoneNumber: customer.phoneNumber
            },
            movie: {
                _id: movie._id,
                title: movie.title,
                dailyRentalRate: movie.dailyRentalRate
            }
        });

        addRental(rental, movie);
        
        writeSuccessfullLog(200, "Rentals created successfully.");
        res.status(200).send(rental);

    }
    catch(error){
        console.log(error.message);
        writeErrorLog(500, error.message);
        return res.status(500).send(error.message)
    }
}

export const getRentals = async (req, res) => {
    try{
        const rentals = await Rental.find({
            _id: {$exists: true}
        })
        .sort("-dateOut");
    
            writeSuccessfullLog(200, "Rentals retrieved successfully.");
            return res.status(200).send(rentals);
    }
    catch(error){
        console.log(error.message);
        writeErrorLog(500, error.message);
        return res.status(500).send(error.message)
    }
}