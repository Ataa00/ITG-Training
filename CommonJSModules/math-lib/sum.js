
function sum(firstNumber, secondNumber){
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    if(isNaN(firstNumber) || isNaN(secondNumber)){
        return "Please enter a valid number";
    }

    let result = firstNumber + secondNumber;
    return result.toFixed(2);
}

module.exports = sum;