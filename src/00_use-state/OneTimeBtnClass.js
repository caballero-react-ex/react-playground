import React, { Component } from 'react';

class OneTimeBtn extends Component {
  state = {
    clicked: false
  }

  handleClick = () => {
    // alert("hi!")
    this.props.onClick();
    this.setState({clicked: true})
  }
  
  render() {
    return (
      <button
        style={{marginBottom: "20px", display: "block", padding: "5px 10px"}}
        onClick={this.handleClick}
        disabled={this.state.clicked}
      >
        You can only click me once
      </button>
    )
  }
}

export default OneTimeBtn;