import React, { useState } from 'react';

const NameInputs = () => {
  const [ firstName, setFirstName ] = useState('')
  const [ lastName, setLastName ] = useState('')

  const handleChange = event => {
    setFirstName(event.target.value)
  }

  const handleChangeLast = event => {
    setLastName(event.target.value)
  }

  return (
    <>
    <div style={{marginBottom: "20px"}}>
      <label style={{marginRight: "20px"}}>First Name</label>
      <input 
        type="text"
        placeholder="insert first name"
        value={firstName}
        onChange={handleChange}
      />
    </div>
    <div>
      <label style={{marginRight: "20px"}}>Last Name</label>
      <input 
        type="text"
        placeholder="insert last name"
        value={lastName}
        onChange={handleChangeLast}
      />
    </div>
    <h1>Hello {firstName} {lastName}</h1>
  </>
  )
}

export default NameInputs;