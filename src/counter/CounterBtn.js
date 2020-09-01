import React from 'react';

function CounterBtn({handleClick}) {
  return (
    <button 
      style={{marginRight: "10px"}}
      onClick={handleClick}
    >
      Click Me!
    </button>
  )
}

export default CounterBtn;