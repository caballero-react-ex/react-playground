import React, {useState} from 'react';

function OneTimeBtnHook(props) {
  const [clicked, setClicked] = useState(false);
  
  const handleClick = () => {
    props.onClick();
    setClicked(true);
  };

  return (
    <button 
      style={{marginBottom: "20px", display: "block", padding: "5px 10px"}}
      onClick={handleClick}
      disabled={clicked}
    >
      can only click me once HOOK
    </button>
  )
}

export default OneTimeBtnHook;