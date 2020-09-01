import React from 'react';

function Room({name="Room", room, toggle, state}) {
  
  const colorState = state ? "yellow" : "lightgrey";

  return (
    <p
      style={{backgroundColor: `${colorState}`, padding: "30px"}}
      onClick={() => toggle(room)}
    >
      {name}
    </p>
  )
}

export default Room;
