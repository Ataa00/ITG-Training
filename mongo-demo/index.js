import mongoose from "mongoose";

// mongoose.connect("mongodb://localhost:27017/playground")
mongoose.connect("mongodb://localhost:27017/mongo-exercises")
    .then(() => console.log("Connected to the DB..."))
    .catch((err) => console.error("Couldn't to connect to the DB...", err));

const courseSchema = mongoose.Schema({
    _id: String,
    name: String,
    author: String,
    tags: [String],
    date: {type: Date, default: Date.now},
    isPublished: Boolean
});

const Course = mongoose.model("Course", courseSchema);

// async function createCourse(){
//     const course = Course({
//         name: "React",
//         author: "Ataa Shaqour",
//         tags: ["Front-End", "JS"],
//         isPublished: true
//     });
    
//     const result = await course.save();
    
//     console.log(result);
// }

// async function getCourses(){
//     //Comparison Query Operators
//     //$eq
//     //$ne
//     //$gt
//     //$gte
//     //$lt
//     //$lte
//     //$in
//     //$nin
//     // .find({price: {$gt: 10}})
//     // .find({price: {$gt: 10, $lt: 30}})
//     // .find({price: {in: [10, 15, 20]}})
//     //------------------------------------------
//     //Logical Query Operators
//     //.find().or({}, {})
//     //.find().and({}, {}) 
//     //------------------------------------------
//     //Regular Expressions
//     //.find({author: /Pattern/})
//     //.find({author: /^Ataa/}) => starts with Ataa
//     //.find({author: /^Ataa/i}) => starts with Ataa with case insensitive
//     //.find({author: /Shaqour$/}) => ends with Shaqour
//     //.find({author: /Shaqour$/i}) => ends with Shaqour with case insensitive
//     //.find({author: /.*Ataa.*/}) => contains Ataa zoro or more charachter .*
//     //------------------------------------------------------------------------
//     //Pagination
//     //.skip((PageNumber-1) * PageSize)
//     //.limit(PageSize)
//--------------------------------------------------------------------------------- 
//     const courses = await Course
//         .find({author: "Mosh", isPublished: true})
//         .limit(10)
//         .sort({name: 1})
//         .select({name: 1, tags: 1})
//         .count();

//     console.log(courses);
// }

// // createCourse();
// getCourses();
//---------------------------------------------------
//Update Document
//There are two aproaches to update the document:
//First aproach: Query first
//- findById()
//- Modify its properties
//- save()
//---------------------------------------------------
//Second aproach: Update first
//- Update directly
//- Optionally: get the updated document.

// async function updateCourse(id){
//     const course = await Course.findById(id);
//     if(!course) return;

//     // course.isPublished = false;
//     // course.author = "Ataa Shaqour";

//     course.set({
//         author: "Ataa Shaqour",
//         isPublished: false
//     });

//     const result = await course.save();
//     console.log(result);
// }

//Second
// async function updateCourse(id){
//     const result = await Course.update({_id: id}, {
//         $set: {
//             author: "Ataa Shaqour",
//             isPublished: false    
//         }
//     });
//     console.log(result);
// }

// async function updateCourse(id){
//     const course = await Course.findByIdAndUpdate({_id: id}, {
//         $set: {
//             author: "Ataa Shaqour",
//             isPublished: true    
//         }
//     }, {new: true});
//     //Without this{new: true} it will dispaly the old doc
//     console.log(course);
// }

// updateCourse("5a68fdc3615eda645bc6bdec");

// async function deleteCourse(id){
//     const result = await Course.deleteOne({_id: id});
//     console.log(result)
// }

// deleteCourse("5a68fdc3615eda645bc6bdec");