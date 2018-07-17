import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    console.log('CONSTRUCTOR')
    super(props)
    this.state = {
      value1: 'a string',
      value2: ['an', 'array'],
      value3: {key1: 'key2'}
    }
  }
  componentWillMount() {
    console.log('componentWillMount')
  }
  render() {
    console.log('RENDER')
    return (
      <div className="App">
      </div>
    )
  }
}

export default App
