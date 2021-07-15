import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  render() {
    calculate(this.state, '=');
    return (
      <>
        <Display />
        <ButtonPanel />
      </>
    );
  }
}

export default App;
