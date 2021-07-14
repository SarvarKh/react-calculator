import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const bigNumOne = new Big(numberOne);
  const bigNumTwo = new Big(numberTwo);
  let result;

  if (operation === '-') {
    result = Big(bigNumOne.minus(bigNumTwo));
  } if (operation === '+') {
    result = Big(bigNumOne.plus(bigNumTwo));
  } if (operation === 'X') {
    result = Big(bigNumOne.times(bigNumTwo));
  } if (operation === '÷') {
    result = Big(bigNumOne.div(bigNumTwo));
  } if (operation === '%') {
    result = Big(bigNumOne.mod(bigNumTwo));
  }

  return result.c[0];
};

export default operate;
