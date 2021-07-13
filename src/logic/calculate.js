/* eslint no-unused-vars: 0 */
import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = { ...data };

  if (buttonName === '+/-') {
    total *= (-1);
    next *= (-1);
  } else if (buttonName === 'AC') {
    total = 0;
    next = 0;
    operation = 0;
  } else if (buttonName === '=') {
    total = operate(total, next, operation);
    next = '';
    operation = null;
  }
};

export default calculate;
