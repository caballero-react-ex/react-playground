import React, { useState } from 'react';

const InputList = () => {
  const [ text, setText ] = useState('');
  const [ textNoNumber, setTextNoNumber ] = useState('');

  const handleChange = event => {
    setText(event.target.value);
  };

  const handleChangeNoNumber = event => {
    let text = event.target.value;
    setTextNoNumber(
      text.replace(/[0-9]/g, '')
    );
  }

  return (
    <div>
      <input 
        type="text"
        value={text}
        placeholder="normal input"
        onChange={handleChange}
      />

      <input 
      style={{marginLeft: "20px"}}
      type="text"
      value={textNoNumber}
      placeholder="no numbers input"
      onChange={handleChangeNoNumber}
      />
    </div>
  )
}


export default InputList;
