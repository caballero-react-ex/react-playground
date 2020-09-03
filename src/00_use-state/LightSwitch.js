import React, { useState } from 'react';

const LightSwitch = () => {
  const [ toggle, setToggle ] = useState(false);

  const onOff = () => (
    setToggle(!toggle)
  )

  const text = toggle ? "ON" : "OFF";
  const color = toggle ? "yellow" : "lightgrey";

  return (
    

    <div
      style={{
        marginTop: "20px",
        padding: "20px 30px",
        backgroundColor: `${color}`
      }}
      onClick={onOff}
    >
      {text}
    </div>
  )

}

export default LightSwitch;