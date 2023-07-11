import mongoose from "mongoose";

// mongoose.connect("mongodb://localhost:27017/playground")
mongoose.connect("mongodb://localhost:27017/mongo-exercises", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to the DB..."))
    .catch((err) => console.error("Couldn't to connect to the DB...", err));

const courseSchema = mongoose.Schema({
    name: {
        type: String, 
        required: true,
        minlength: 5,
        maxlength: 255,
        lowercase: true,
        // uppercase: true,
        trim: true
        // match: /pattern/
    },
    category: {
        type: [String],
        enum: ["web", "database", "frontend", "backend"],
        lowercase: true
    },
    author: String,
    tags: {
        type: Array,
        // validate: {
        //     isAsync: true,
        //     validator: function(v, callback){
        //         setTimeout(() => {
        //             //some async code
        //             const result = v && v.length > 0;
        //             callback(result);
        //         }, 4000);
        //     },
        //     message: "There should be at least one tag."
        // }
        //using promises
        validate: {
            validator: (v) => new Promise((resolve, reject) => {
                setTimeout(() => {
                    const result = v && v.length > 0;
                    resolve(result);
                }, 4000);
            }),
            message: "There should be at least one tag."
        }
    },
    date: {type: Date, default: Date.now},
    isPublished: Boolean,
    price: {
        type: Number,
        required: function(){
            return this.isPublished;
        },
        min: 10,
        max: 200,
        get: v => Math.round(v),
        set: v => Math.round(v)
    }
});

const Course = mongoose.model("Course", courseSchema);

async function createCourse(){
    const course = new Course({
        name: "HTML CSS JS",
        category: "web",
        author: "Ataa Shaqour",
        tags: "Web",
        isPublished: true,
        price: 50.5
    });

    try{
        const result = await course.save();
        console.log(result);
    }
    catch(ex){
        for(let error in ex.errors){
            console.log(ex.errors[error].message);
        }
    }
}

createCourse();