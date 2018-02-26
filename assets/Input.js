import React, { Component } from 'react';

export class HelloMessage extends Component {
  constructor(props) {
    super(props);
    this.state = { name: props.name };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { name } = this.state;
    return (
      <div>
        Hello {name}<br />
        Enter your name:
        <input
          name="name"
          value={name}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default class App extends Component {
  render() {
    return <HelloMessage name="David" />;
  }
}
