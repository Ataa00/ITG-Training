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
// //EventEmitter => UC to represent a class.

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

const http = require("http");

// const server = http.createServer();

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.write("Hi there..");
        res.end();
    }
});

// server.on("connection", (socket) => {
//     console.log("new connection...");
// })

server.listen("3000");

console.log("Listning to Port 3000.");