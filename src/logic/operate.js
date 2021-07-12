import Big from 'big.js';


const operate = (numberOne, numberTwo, operation) => {
    let bigNumOne = new Big(numberOne);
    let bigNumTwo = new Big(numberTwo);
    
    if (operation == "-") {
        return bigNumOne - bigNumTwo;
    } else if (operation == "+") {
        return bigNumOne + bigNumTwo;
    } else if (operation == "X") {
        return bigNumOne * bigNumTwo;
    } else if (operation == "÷") {
        return bigNumOne / bigNumTwo;
    } else if (operation == "%") {
        return bigNumOne / 100;
    }
}

export default operate;
