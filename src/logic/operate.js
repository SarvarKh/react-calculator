import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const bigNumOne = numberOne !== null ? new Big(numberOne) : null;
  const bigNumTwo = numberTwo !== null ? new Big(numberTwo) : null;
  let result;

  if (operation === '-') {
    result = Big(bigNumOne.minus(bigNumTwo));
  } else if (operation === '+') {
    result = Big(bigNumOne.plus(bigNumTwo));
  } else if (operation === 'X') {
    result = Big(bigNumOne.times(bigNumTwo));
  } else if (operation === '÷') {
    result = Big(bigNumOne.div(bigNumTwo));
  }

  return result.c[0];
};

export default operate;
