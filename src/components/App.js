import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const App = () => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     total: null,
  //     next: '0',
  //     operation: null,
  //   };

  //   this.handleState = this.handleState.bind(this);
  // }
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState('0');
  const [operation, setOperation] = useState(null);

  const handleState = (newDigit) => {
    const numbers = /[0-9]/g;
    const dataObject = { total, next, operation };
    const calResult = calculate(dataObject, newDigit);
    if (newDigit === 'AC' || newDigit === '%') {
      // this.setState(
      //   {
      //     next: calResult.next,
      //     operation: null,
      //   },
      // );
      setNext(calResult.next);
      setOperation(null);
    } else if (newDigit === '+/-') {
      // this.setState(
      //   {
      //     next: calResult.next,
      //   },
      // );
      setNext(calResult.next);
    } else if (newDigit === '.') {
      // this.setState((prevState) => ({
      //   next: prevState.next.includes('.') ? prevState.next : prevState.next + newDigit,
      // }));
      setNext((prevState) => (
        prevState.includes('.') ? prevState : prevState + newDigit
      ));
    } else if (newDigit === '+' || newDigit === '-' || newDigit === 'X' || newDigit === '÷') {
      // this.setState(
      //   {
      //     next: calResult.next,
      //     total: calResult.total,
      //     operation: calResult.operation,
      //   },
      // );
      setNext(calResult.next);
      setTotal(calResult.total);
      setOperation(calResult.operation);
    } else if (newDigit === '=' && dataObject.next && dataObject.total) {
      // this.setState(
      //   {
      //     next: calResult.next,
      //   },
      // );
      setNext(calResult.next);
    } else if (newDigit.match(numbers)) {
      // this.setState((prevState) => ({
      //   next: prevState.next === '0' ? newDigit : prevState.next + newDigit,
      // }));
      setNext((prevState) => (
        prevState === '0' ? newDigit : prevState + newDigit
      ));
    }
  };

  return (
    <>
      <Display status={next} />
      <ButtonPanel grantParentHandleState={handleState} />
    </>
  );
};

export default App;
