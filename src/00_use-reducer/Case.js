import { render } from '@testing-library/react';
import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch(action.type) {
    
    case "keypress": 
      // if the lock is already unlocked, do nothing
      if (state.status === "unlocked") {
        return state
      }
      // if this key matches the next one in sthe sequence, keep doing
      if (
        action.value === parseInt(state.combo[state.nextKeyIndex], 10)
      ) {
        const nextKeyIndex = state.nextKeyIndex + 1
        return {
          ...state, 
          nextKeyIndex,
          status: 
            nextKeyIndex === state.combo.length 
              ? "unlocked"
              : "locked" 
        };
      } else {
        // if this key was wrong, reset the secuence
        return {
          ...state, 
          nextKeyIndex: 0
        }; 
      }
    // if the safe is unlocked, then reset 
    case "lock": 
      if (state.status === "unlocked") {
        return {
          ...state,
          status: "locked", 
          nextKeyIndex: 0
        }
      }

    default: 
      return state
  }
};

function Case({combo}) {

  

  const [lock, dispatch] = useReducer(reducer, {
    combo,
    status: 'locked',
    nextKeyIndex: 0
  });
  

  function handleClick(index) {
    //alert("the number is" + number)
    dispatch({type: "keypress", value: index})
  }

  function handleOpen() {
    // if(lock.status === "locked") {
    //   alert("Case is ALREADY locked")
    // } else {
    //   alert("Case is locked")
    // }
    dispatch({
      type: "lock", 
    })
    
  }

  

  return(
    <div style={{borderBottom: "1px solid grey", paddingBottom: "20px"}}>
      <div>
        {[1,2,3,4,5,6].map((index) => (
          <button key={index} onClick={() => handleClick(index)}>{index}</button>
        ))}
        <button onClick={handleOpen}>Lock the safe</button>
      </div>
      
        <p>The case is {lock.status}</p>
        <p>You got {lock.nextKeyIndex} keys correct</p>
      
      
    </div>
  )
}

export default Case; 