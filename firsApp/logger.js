//Sun-18/6/2023

// console.log(__filename);
// console.log(__dirname);

// var url = 'http://mylogger.io/log';

// function log(message){
//     //Send HTTP request
//     console.log(message);
// }

// module.exports.log = log;
// module.exports.endpoint = url; It is an implimentation details so we don't have to make it public.

//Or we can export it dirictly as a function lile the following:
// module.exports = log;
// in app.js => const log = require(logger.js);
//log("Message");

// const EventEmitter = require("events");

// class Logger extends EventEmitter{
//     log(message){
//         console.log(message);
//         this.emit("eventLogged", {id:1, url:"http://"});
//     }
// }

// module.exports = Logger;