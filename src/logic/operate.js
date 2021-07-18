import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  console.log(numberOne, numberTwo, operation);
  const bigNumOne = new Big(numberOne);
  const bigNumTwo = new Big(numberTwo);
  let result;

  console.log(numberOne, numberTwo, bigNumOne, bigNumTwo);
  if (operation === '-') {
    result = Big(bigNumOne.minus(bigNumTwo));
  } else if (operation === '+') {
    result = Big(bigNumOne.plus(bigNumTwo));
  } else if (operation === 'X') {
    result = Big(bigNumOne.times(bigNumTwo));
  } else if (operation === '÷') {
    result = Big(bigNumOne.div(bigNumTwo));
  }

  return result.toString();
};

export default operate;
