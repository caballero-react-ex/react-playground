import React, { Component } from 'react';
import CounterBtn from './CounterBtn';
import ResetBtn from './ResetBtn';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.counter = this.counter.bind(this);
  }

  counter() {
    // this.setState({
    //   count: this.state.count + 1
    // })

    // Functional setState
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }

  reset() {
    // this.setState({
    //   count: 0
    // })

    // Functional setState
    this.setState(prevState => {
      return {
        count: prevState.count = 0
      }
    })
  }

  handleClick() {
    this.counter()
  }

  handleResetClick() {
    this.reset()
  }

  render() {
    return (
      <div style={{backgroundColor: "lightblue", padding: "20px"}}>
        <CounterBtn handleClick={this.handleClick} /> 
        <ResetBtn handleClick={this.handleResetClick} />
        You have clicked {this.state.count} times
      </div>
    )
  }
}

export default Counter;