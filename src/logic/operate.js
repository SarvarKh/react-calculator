import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const bigNumOne = new Big(numberOne);
  const bigNumTwo = new Big(numberTwo);
  let result;

  if (operation === '-') {
    result = bigNumOne - bigNumTwo;
  } if (operation === '+') {
    result = bigNumOne + bigNumTwo;
  } if (operation === 'X') {
    result = bigNumOne * bigNumTwo;
  } if (operation === '÷') {
    result = bigNumOne / bigNumTwo;
  } if (operation === '%') {
    result = bigNumOne / 100;
  }

  return result;
};

export default operate;
