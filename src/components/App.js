import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // total: null,
      next: null,
      // operation: null,
    };

    this.handleState = this.handleState.bind(this);
  }

  handleState(newDigit) {
    this.setState({
      next: newDigit,
    });
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
