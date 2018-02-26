import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <h1>
          {this.state.count}
          <button onClick={this.increment}>+</button>
        </h1>
      </div>
    );
  }
}

export default Counter;
