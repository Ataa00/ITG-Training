
function divide(firstNumber, secondNumber){
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    if(isNaN(firstNumber) || isNaN(secondNumber)){
        throw "Please enter a valid number";
    }

    if(secondNumber === 0){
        throw "Illegal operation. Can't divide by zero.";
    }
    
    let result = firstNumber / secondNumber;
    
    return result.toFixed(2);
}

module.exports = divide;