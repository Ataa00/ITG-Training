
export default(firstNumber, secondNumber) => {
    if(Number(secondNumber) === 0) return NaN;

    let result = Number(firstNumber) / Number(secondNumber);
    return result.toFixed(2);
}