
const sum = require("./math-lib/sum.js");
const sub = require("./math-lib/substract.js");
const mult = require("./math-lib/multiply.js");
const divide = require("./math-lib/divide.js");

console.log(sum(1,1), sub(1,1), mult(1,1), divide(1,1));

console.log(sum(1.0,1.5), sub(1,1.5), mult(1,1.5), divide(1,1.5));

console.log(sum(1.0,1.55234), sub(1,1.55234), mult(1,1.55234), divide(1,1.55234));