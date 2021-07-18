import operate from './operate';

const calculate = (data, buttonName) => {
  const newData = { ...data };
  const operations = ['+', '-', 'X', '÷'];

  if (buttonName === '+/-') {
    newData.total *= (-1);
    newData.next = parseFloat(newData.next) * (-1);
  } else if (buttonName === 'AC') {
    newData.total = '0';
    newData.next = '0';
    newData.operation = '0';
  } else if (buttonName === '%') {
    newData.total = '0';
    newData.next /= 100;
    newData.operation = '0';
  } else if (operations.includes(buttonName)) {
    console.log(newData.total, newData.next, newData.operation);
    newData.next = operate(newData.total, newData.next, newData.operation);
    newData.total = '';
    newData.operation = null;
  }

  return newData;
};

export default calculate;
