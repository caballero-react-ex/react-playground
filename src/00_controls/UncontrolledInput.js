import React, { useState, createRef } from 'react';

const NameInputsUncontrolled = () => {
  const [ { firstName, lastName }, setNames ] = useState({
    firstName: '',
    lastName: ''
  });

  const firstNameRef = createRef();
  const lastNameRef = createRef();

  const handleChange = () => {
    setNames({
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
    })
  }

  return (
    <>
    <h3 style={{marginBottom: "20px", paddingTop: "20px", borderTop: "1px solid black"}}>Input with Functional Comp. / Uncontrolled</h3>
    <div style={{marginBottom: "20px"}}>
      <label style={{marginRight: "20px"}}>First Name</label>
      <input 
        type="text"
        placeholder="insert first name"
        ref={firstNameRef}
        onChange={handleChange}
      />
    </div>
    <div>
      <label style={{marginRight: "20px"}}>Last Name</label>
      <input 
        type="text"
        placeholder="insert last name"
        ref={lastNameRef}
        onChange={handleChange}
      />
    </div>
    <h1>Hello {firstName} {lastName}</h1>
  </>
  )
}

export default NameInputsUncontrolled;