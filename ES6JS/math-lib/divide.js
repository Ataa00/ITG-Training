
export default(firstNumber, secondNumber) => {
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    if(isNaN(firstNumber) || isNaN(secondNumber)){
        return "Please enter a valid number";
    }

    if(secondNumber === 0){
        return "Illigel operation. Can't divide by zero.";
    }

    let result = firstNumber / secondNumber;
    return result.toFixed(2);
}