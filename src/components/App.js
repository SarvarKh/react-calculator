import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: '0',
      operation: null,
    };

    this.handleState = this.handleState.bind(this);
  }

  handleState(newDigit) {
    const numbers = /[0-9]/g;
    const dataObject = { ...this.state };
    const calResult = calculate(dataObject, newDigit);
    if (newDigit === 'AC' || newDigit === '%') {
      this.setState(
        {
          next: calResult.next,
          operation: null,
        },
      );
    } else if (newDigit === '+/-') {
      this.setState(
        {
          next: calResult.next,
        },
      );
    } else if (newDigit === '.') {
      this.setState((prevState) => ({
        next: prevState.next.includes('.') ? prevState.next : prevState.next + newDigit,
      }));
    } else if (newDigit === '+' || newDigit === '-' || newDigit === 'X' || newDigit === '÷') {
      this.setState(
        {
          next: calResult.next,
          total: calResult.total,
          operation: calResult.operation,
        },
      );
    } else if (newDigit === '=' && dataObject.next && dataObject.total) {
      this.setState(
        {
          next: calResult.next,
        },
      );
    } else if (newDigit.match(numbers)) {
      this.setState((prevState) => ({
        next: prevState.next === '0' ? newDigit : prevState.next + newDigit,
      }));
    }
  }

  render() {
    const { next } = this.state;
    return (
      <>
        <Display status={next} />
        <ButtonPanel grantParentHandleState={this.handleState} />
      </>
    );
  }
}

export default App;
