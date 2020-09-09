import React, { useState, Component } from 'react';

class NameInputsUncontrolled extends Component {
  constructor(props) {
    super(props);
    this.firstNameRef = React.createRef();
    this.lastNameRef = React.createRef();
    this.state = {
      firstName: '',
      lastName: ''
    };
  }
  

  handleChange = () => {
   this.setState({
    firstName: this.firstNameRef.current.value,
    lastName: this.lastNameRef.current.value,
   });
  };

  render() {
    const { firstName, lastName} = this.state;

    return (
      <>
      <h3 style={{marginBottom: "20px", paddingTop: "20px", borderTop: "1px solid black"}}> Input with Class Comp. / Uncontrolled</h3>
      <div style={{marginBottom: "20px"}}>
        <label style={{marginRight: "20px"}}>First Name</label>
        <input 
          type="text"
          name="firstName"
          placeholder="insert first name"
          ref={this.firstNameRef}
          onChange={this.handleChange}
        />
      </div>
      <div>
        <label style={{marginRight: "20px"}}>Last Name</label>
        <input 
          type="text"
          name="lastName"
          placeholder="insert last name"
          ref={this.lastNameRef}
          onChange={this.handleChange}
        />
      </div>
      <h1>Hello {firstName} {lastName}</h1>
    </>
    )
  }
}

export default NameInputsUncontrolled;