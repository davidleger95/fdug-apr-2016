import React, { Component } from 'react';
import { HelloMessage } from './HelloApp';

const data = {
  name: 'David'
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    // simulated network call
    setTimeout(() =>
      this.setState({ data, loading: false }), 3000);
  }

  render() {
    return this.state.loading
      ? <div>Loading...</div>
      : <HelloMessage {...this.state.data} />;
  }
}
