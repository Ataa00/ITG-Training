
import {sum} from "./math-lib/sum.js";
import {sub} from "./math-lib/substract.js";
import {mult} from "./math-lib/multiply.js";
import {divide} from "./math-lib/divide.js";

console.log(sum(1,1), sub(1,1), mult(1,1), divide(1,1));

console.log(sum(1.0,1.5), sub(1,1.5), mult(1,1.5), divide(1,1.5));

console.log(sum(1.0,1.55234), sub(1,1.55234), mult(1,1.55234), divide(1,1.55234));