import React, { Component } from 'react';
import User from '../Containers/User';
import Numbers from '../Containers/Numbers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <User></User>
        <Numbers></Numbers>
      </div>
    );
  }
}

export default App;
