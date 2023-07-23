
import sum from "./math-lib/sum.js";
import sub from "./math-lib/subtract.js";
import mult from "./math-lib/multiply.js";
import divide from "./math-lib/divide.js";

let firstNumberInput = document.getElementById("firstNumber");
let secondNumberInput = document.getElementById("secondNumber"); 
let operationInput = document.getElementById("operation"); 
let resultInput = document.getElementById("result");
let submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", () => {
    try{
        switch(operationInput.value){
            case "+":
                resultInput.value = sum(firstNumberInput.value, secondNumberInput.value);
                break;
            case "-":
                resultInput.value = sub(firstNumberInput.value, secondNumberInput.value);
                break;
            case "*":
                resultInput.value = mult(firstNumberInput.value, secondNumberInput.value);
                break;
            case "/":
                resultInput.value = divide(firstNumberInput.value, secondNumberInput.value);
                break;
            default:
                throw "Wrong operation.";
        }
    }
    catch (error){
        resultInput.value = error;
    }
});