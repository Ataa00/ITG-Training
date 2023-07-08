
const express = require("express") 
const router = express.Router(); 

let courses = [
    {id : 1, name : "Course1"},
    {id : 2, name : "Course2"},
    {id : 3, name : "Course3"},
];

router.get("/", (request, response) => {
    response.send(courses);
});

router.post("/", (request, response) => {
    //Add validation part 
    // if(!req.body.name || req.body.name.length < 3){
    //     res.status(400).send("Please Enter name with min. 3 characters");
    // }

    // const schem = {
    //     name : Joi.string().min(3).required()
    // };

    // const result = Joi.validate(req.body, schem);
    // console.log(result);

    // if(result.error){
    //     res.status(400).send(result.error);
    //     return;
    // }

    const {error} = validateCourse(request.body);

    if(error){
        response.status(400).send(error);
        return;
    }

    const course = {
        id : courses.length+1,
        name : request.body.name
    };
    courses.push(course);
    response.send(course);
});

// //To send a paramtere we use ":".
// app.get("/api/courses/:year/:month", (request, response) => {
//     response.send(request.params);
// });

//To send a paramtere we use ":".
router.get("/:id", (request, response) => {
    const course = courses.find(c => c.id === parseInt(request.params.id));
    if(!course){
        response.status(404).send("The Course ID you Provided Is Not Exist.");
    }
    response.send(course);
});

router.put("/:id", (request, response) =>{
    //Lockup the course
    //If it is not existing, return 404.
    const course = courses.find(c => c.id === parseInt(request.params.id));
    if(!course){
        response.status(404).send("The Course ID you Provided Is Not Exist.");
    }

    //if invalid, return 400 - bad request
    const {error} = validateCourse(request.body);

    if(error){
        response.status(400).send(error.details[0].message);
        return;
    }

    //Update course 
    course.name = request.body.name;
    //return update course
    response.send(course);
});

router.delete("/:id", (request, response) => {
    //Look up the course
    const course = courses.find((course) => course.id === parseInt(request.params.id));
    
    //If it is not exist return 404
    if(!course){
        response.status(404).send("This course doesn't exit.");
        return;
    }

    //Delete the course
    const index = courses.indexOf(course);
    courses.splice(index, 1)

    //return That it is deleted
    response.send("successfully Deleted.");
});


function validateCourse(course){
    const schema = Joi.object({
        name : Joi.string().min(3).required()
    });

    return schema.validate(course);
}

module.exports = router;