
const sum = require("./math-lib/sum.js");
const sub = require("./math-lib/subtract.js");
const mult = require("./math-lib/multiply.js");
const divide = require("./math-lib/divide.js");
const prompt = require('prompt-sync')({sigint: true});

let firstNumber = null;
let secondNumber = null;
let operation = null;

while(operation !== "e"){
    try{
        firstNumber = Number(prompt("Enter the first number: "));
        secondNumber = Number(prompt("Enter the second number: "));
        operation = prompt("Enter the operation you want to apply (sum: *, sub: -, devide: /, mult: *, exit: e): ");
        switch(operation){
            case "+":
                console.log(sum(firstNumber, secondNumber));
                break;
            case "-":
                console.log(sub(firstNumber, secondNumber));
                break;
            case "*":
                console.log(mult(firstNumber, secondNumber));
                break;
            case "/":
                console.log(divide(firstNumber, secondNumber));
                break;
            default:
                throw "Wrong operation."
        }
    }
    catch (error){
        console.log(error);
    }
}