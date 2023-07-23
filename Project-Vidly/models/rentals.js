import mongoose from "mongoose";

const rentalsSchema = new mongoose.Schema({
    customer: {
        type: new mongoose.Schema({
            name: {
                type: String,
                required: true,
                minlength: 2,
                maxlength: 30
            },
            phoneNumber: {
                type: String,
                match: /[0-9]/,
                minlength: 14,
                maxlength: 14
            },
            isGolden: {
                type: Boolean,
                default:false
            },
        }),
        required: true
    },
    movie: {
        type: new mongoose.Schema({
            title: {
                type: String,
                required: true,
                minlength: 1,
                maxlength: 200,
                trim: true
            },
            dailyRentalRate: {
                type: Number,
                required: true,
                min: 0,
        
            }
        }),
        required: true
    },
    dateOut: {
        type: Date,
        required: true,
        default: Date.now
    },
    dateRented: {
        type: Date
    },
    rentalFee: {
        type: Number,
        min: 0
    }
});

const Rental = mongoose.model("Rental", rentalsSchema);

export const addRental = async (rental, movie) => {
    const sesstion = mongoose.startSession();
    try{
        (await sesstion).withTransaction( async () => {
            await rental.save();
            
            await movie.updateOne({
                $inc: {numberInStock: -1}
            })
        });
    
    }
    finally{
        (await sesstion).endSession();
    }
}

export default Rental;