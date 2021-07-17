import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // total: null,
      next: '0',
      // operation: null,
    };

    this.handleState = this.handleState.bind(this);
  }

  handleState(newDigit) {
    if (newDigit === 'AC') {
      this.setState({
        next: '0',
      });
    } else {
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
