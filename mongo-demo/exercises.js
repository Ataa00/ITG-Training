//Exercise 1: 
//Get all published backend courses
//sort them by there name
//pick only there name and author
//Display them
//------------------------------
//Exercise2: 
//Get all the published frontend and backend courses,
//sort them by their price in a descending order,
//pick only their name and author
//display it.
//------------------------------------------
//Exercise3:
//get all the published courses that are $15 or more
//or have the word "by" in their title
import mongoose from "mongoose"

mongoose.connect("mongodb://localhost:27017/mongo-exercises")
    .then(() => console.log("Connected..."))
    .catch(err => console.log("Couldn't Connect to the server...", err));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date: Date,
    isPublished: Boolean,
    price: Number
});

const Course = mongoose.model("Course", courseSchema);

async function getPublishedCourses(){
    return await Course
    .find({tags: "backend" ,isPublished: true})
    .sort({name: 1})
    .select({name: 1, author: 1});
}

async function getPublishedFronAndBackEndCourses(){
    return Course
        .find({isPublished: true, tags: {$in: ["frontend", "backend"]}})
        // .find({isPublished: true})
        // .or([{tags:"frontend"}, {tags:"backend"}])
        .sort("-price")
        .select("name author price");
}

async function getPublishedCoursesWithBy(){
    return Course
        .find({isPublished: true})
        .or([{price: {$gte: 15}}, {name: /.*by.*/i}])
        .sort("-price")
        .select("name author price");
}

async function run(){   
    // const course = await getPublishedCourses();
    // const course = await getPublishedFronAndBackEndCourses();
    const course = await getPublishedCoursesWithBy();
    console.log(course);
}

run();