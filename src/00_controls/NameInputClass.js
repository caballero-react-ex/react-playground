import React, { useState, Component } from 'react';

class NameInputsClass extends Component {
  state = {
    firstName: '',
    lastName: ''
  }

  handleChange = event => {
   this.setState({
     [event.target.name]: event.target.value
   });
  };

  render() {
    const { firstName, lastName} = this.state;

    return (
      <>
      <h3 style={{marginBottom: "20px", paddingTop: "20px", borderTop: "1px solid black"}}> Input with Class Comp.</h3>
      <div style={{marginBottom: "20px"}}>
        <label style={{marginRight: "20px"}}>First Name</label>
        <input 
          type="text"
          name="firstName"
          placeholder="insert first name"
          value={firstName}
          onChange={this.handleChange}
        />
      </div>
      <div>
        <label style={{marginRight: "20px"}}>Last Name</label>
        <input 
          type="text"
          name="lastName"
          placeholder="insert last name"
          value={lastName}
          onChange={this.handleChange}
        />
      </div>
      <h1>Hello {firstName} {lastName}</h1>
    </>
    )
  }
}

export default NameInputsClass;