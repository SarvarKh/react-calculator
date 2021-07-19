import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let bigNumOne;
  let bigNumTwo;
  if (numberOne !== null && numberTwo !== null) {
    bigNumOne = new Big(numberOne);
    bigNumTwo = new Big(numberTwo);
  }
  let result;
  if (operation === '-') {
    result = Big(bigNumOne.minus(bigNumTwo));
  } else if (operation === '+') {
    result = Big(bigNumOne.plus(bigNumTwo));
  } else if (operation === 'X') {
    result = Big(bigNumOne.times(bigNumTwo));
  } else if (operation === '÷' && numberTwo !== '0') {
    result = Big(bigNumOne.div(bigNumTwo));
  } else {
    return result;
  }

  return result.toString();
};

export default operate;
