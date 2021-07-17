import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // total: null,
      // next: null,
      // operation: null,
    };
  }

  render() {
    return (
      <>
        <Display />
        <ButtonPanel />
      </>
    );
  }
}

export default App;
