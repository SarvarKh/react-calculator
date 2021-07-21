import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import Navbar from './Navbar';

const App = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState('0');
  const [operation, setOperation] = useState(null);

  const handleState = (newDigit) => {
    const numbers = /[0-9]/g;
    const dataObject = { total, next, operation };
    const calResult = calculate(dataObject, newDigit);
    if (newDigit === 'AC' || newDigit === '%') {
      setNext(calResult.next);
      setOperation(null);
    } else if (newDigit === '+/-') {
      setNext(calResult.next);
    } else if (newDigit === '.') {
      setNext((prevState) => (
        prevState.includes('.') ? prevState : prevState + newDigit
      ));
    } else if (newDigit === '+' || newDigit === '-' || newDigit === 'X' || newDigit === '÷') {
      setNext(calResult.next);
      setTotal(calResult.total);
      setOperation(calResult.operation);
    } else if (newDigit === '=' && dataObject.next && dataObject.total) {
      setNext(calResult.next);
    } else if (newDigit.match(numbers)) {
      setNext((prevState) => (
        prevState === '0' ? newDigit : prevState + newDigit
      ));
    }
  };

  return (
    <>
      <Navbar />
      <Display status={next} />
      <ButtonPanel grantParentHandleState={handleState} />
    </>
  );
};

export default App;
