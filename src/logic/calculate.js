import operate from './operate';

const calculate = (data, buttonName) => {
  const newData = { ...data };
  const operations = ['+', '-', 'X', '÷'];

  if (buttonName === '+/-') {
    newData.next = (parseFloat(newData.next) * (-1.0)).toString();
  } else if (buttonName === 'AC') {
    newData.next = '0';
  } else if (buttonName === '%') {
    newData.next /= 100;
  } else if (operations.includes(buttonName)) {
    newData.total = newData.next;
    newData.next = '0';
    newData.operation = buttonName;
  } else if (buttonName === '=') {
    newData.next = operate(newData.total, newData.next, newData.operation);
    newData.total = newData.next;
  }

  return newData;
};

export default calculate;
