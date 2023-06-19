//Sun-18/6/2023
// function sayHellow(name){
//     console.log("Hellow " + name);
// }

// sayHellow("Ataa");

//----------------------------------------
// var message = "asd";

// console.log(global.message);
//------------------------------------------

// const logger = require('./logger.js');

// var logger = require('./logger.js');

// We should define it as a constant to avoid 
// overriding the varialbe like the following:

//logger = 1;

// console.log(logger);

// logger.log("Message");
//------------------------------------------------
// const path = require('path');

// console.log(path.parse(__filename));
//-------------------------------------

// const os = require("os");

// var totalMem = os.totalmem();
// var freeMem = os.freemem();

// console.log(`Total Memory: ${totalMem}`);
// console.log(`Free Memory: ${freeMem}`);

//-------------------------------------------

// const fileSystem = require('fs');

// const file = fileSystem.readFile("./text.txt", (err, data)=>{
//     if(err){
//         return callback(err);
//     }
//     console.log(data.toString('utf-8'));
// });

// const files = fileSystem.readdir('$', function (error, files){
//     if(error){
//         console.log("Error: ", error);
//     }
//     else{
//         console.log(files);
//     }
// });

// console.log(files);

//-----------------------------------------------

// const EventEmitter = require("events");
// //EventEmitter => Upper Case to represent a class.

// var emitt = new EventEmitter();

// emitt.on("loggedEvent", function(arg){
//     console.log("Event Called.", arg);
// });

// emitt.emit("loggedEvent", {id:1, url:"http://"});

//-------------------------------------------------------

// const Logger = require("./logger.js");

// var logger = new Logger();

// logger.on("eventLogged", function(arg){
//     console.log("Listner called", arg);
// });

// logger.log("Hi,");

//--------------------------------------------------

// const http = require("http");

// // const server = http.createServer();

// const server = http.createServer((req, res) => {
//     if(req.url === "/"){
//         res.write("Hi there..");
//         res.end();
//     }
// });

// // server.on("connection", (socket) => {
// //     console.log("new connection...");
// // })

// server.listen("3000");

// console.log("Listning to Port 3000.");
//--------------------------------------------------
//Initiate a server:

// const http = require("http");

// const server = http.createServer((request, response) => {
//     console.log("requesting");

//     response.write("Hellow there...");
//     response.end();
// })

// server.listen("3000");

// console.log("Server started at: http://localhost:3000/");

//-----------------------------------------------------------------
//Mon-19/6/2023

//The following code will send a GET request to NASA’s API and print out //the URL for the astronomy picture of the day as well as an explanation:
// const https = require('https');
// https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
//     let data = '';
//     // A chunk of data has been recieved.
//     resp.on('data', (chunk) => {
//         data += chunk;
//     });
//     // The whole response has been received. Print out the result.
//     resp.on('end', () => {
//         console.log(JSON.parse(data).explanation);
//     });
// }).on("error", (err) => {
//     console.log("Error: " + err.message);
// });
//----------------------------------------------------------------------------------------------------

