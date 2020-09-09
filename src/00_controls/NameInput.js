import React, { useState } from 'react';

const NameInputs = () => {
  const [ { firstName, lastName }, setNames ] = useState({
    firstName: '',
    lastName: ''
  });

  const handleChange = event => {
    event.persist();
    console.log(event.target.name);
    console.log(event.target.value);

    setNames(prevState => ({
       ...prevState,
      [event.target.name]: event.target.value
    }))
  }

  return (
    <>
    <h3>Input with Functional Comp.</h3>
    <div style={{marginBottom: "20px"}}>
      <label style={{marginRight: "20px"}}>First Name</label>
      <input 
        type="text"
        name="firstName"
        placeholder="insert first name"
        value={firstName}
        onChange={handleChange}
      />
    </div>
    <div>
      <label style={{marginRight: "20px"}}>Last Name</label>
      <input 
        type="text"
        name="lastName"
        placeholder="insert last name"
        value={lastName}
        onChange={handleChange}
      />
    </div>
    <h1>Hello {firstName} {lastName}</h1>
  </>
  )
}

export default NameInputs;