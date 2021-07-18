import operate from './operate';

const calculate = (data, buttonName) => {
  const newData = { ...data };

  if (buttonName === '+/-') {
    newData.total *= (-1);
    newData.next *= (-1);
  } else if (buttonName === 'AC') {
    newData.total = '0';
    newData.next = '0';
    newData.operation = '0';
  } else if (buttonName === '=') {
    newData.total = operate(newData.total, newData.next, newData.operation);
    newData.next = '';
    newData.operation = null;
  }

  return newData;
};

export default calculate;
