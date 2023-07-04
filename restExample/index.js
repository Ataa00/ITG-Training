const helmet = require("helmet");
const morgan = require("morgan");
const Joi = require("joi");
const logger = require("./logger");
const authenticator = require("./authenticator");
const express = require("express");
const app = express();

//To use middleware functions
app.use(express.json());
app.use(express.urlencoded( {extended: true}));
app.use(express.static("public"));
app.use(helmet());

if(app.get("env") === "development"){
    app.use(morgan('tiny'));
    console.log("Morgane is enabled...")
}
//Development, testing, production...
console.log(`NODE_ENV: ${process.env.NODE_ENV}`); //Default value if it is not setted is undefined
console.log(`APP: ${app.get("env")}`); //Default value is Development

app.use(logger);

app.use(authenticator);

let courses = [
    {id : 1, name : "Course1"},
    {id : 2, name : "Course2"},
    {id : 3, name : "Course3"},
];

app.get("/", (request, response) => {
    response.send("Hello world...");
});

app.get("/api/courses", (request, response) => {
    response.send(courses);
});

app.post("/api/courses", (request, response) => {
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
app.get("/api/courses/:id", (request, response) => {
    const course = courses.find(c => c.id === parseInt(request.params.id));
    if(!course){
        response.status(404).send("The Course ID you Provided Is Not Exist.");
    }
    response.send(course);
});

app.put("/api/courses/:id", (request, response) =>{
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

app.delete("/api/courses/:id", (request, response) => {
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

//To set the Env variable we use in terminal => set => Windows or export for Linux " set PORT=5000"
var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listning to port ${port}...\nOpen home page: http://localhost:${port}/`);
});


function validateCourse(course){
    const schema = Joi.object({
        name : Joi.string().min(3).required()
    });

    return schema.validate(course);
}