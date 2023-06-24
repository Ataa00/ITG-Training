const express = require("express");
const app = express();

let courses = [
    {id : 1, name : "Course1"},
    {id : 2, name : "Course2"},
    {id : 3, name : "Course3"},
];

app.get("/", (request, response) => {
    response.send("Hellow world...");
});

app.get("/api/courses", (request, response) => {
    response.send(["C++", "JS", "Java", "Pythone"]);
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


//To set the Env variable we use in terminal => set => Windows or export for Linux " set PORT=5000"
var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listning to port ${port}...\nOpen home page: http://localhost:${port}/`);
});
