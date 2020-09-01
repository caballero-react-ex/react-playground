import React from 'react';

function ResetBtn({handleClick}) {
  return (
    <button 
      style={{marginRight: "10px"}}
      onClick={handleClick}
    >
      Reset
    </button>
  )
}

export default ResetBtn;