import React, { Component } from 'react';
import CounterBtn from './CounterBtn';
import ResetBtn from './ResetBtn';

class CounterNoCons extends Component {
  
    state = { 
      count: 0 
    };
    

  counter() {
    // Functional setState
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }

  reset() {
    // Functional setState
    this.setState(prevState => {
      return {
        count: prevState.count = 0
      }
    })
  }

  handleClick = () => {
    // alert("this.counter()")
    this.counter();
  }

  handleResetClick = () => {
    this.reset();
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

export default CounterNoCons;