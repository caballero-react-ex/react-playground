import { render } from '@testing-library/react';
import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch(action) {
    
    case 1: 
      return [state + 1]
    case 2: 
      return [state + 2]
    case 3: 
      return [state + 3]
    case 4: 
      return [state + 4]
    case 5: 
      return [state + 5]
    case 6: 
      return [state + 6]
  }
}

function Case({combo}) {

  const [lock, dispatch] = useReducer(reducer, {
    combo,
    status: 'locked',
    nextKeyIndex: 0
  });
  

  function handleClick(number) {
    dispatch(number)
  }

  

  return(
    <div style={{borderBottom: "1px solid grey", paddingBottom: "20px"}}>
      <div>
        {[1,2,3,4,5,6].map((index) => (
          <button key={index} onClick={() => handleClick(index)}>{index}</button>
        ))}
      </div>
      
      
    </div>
  )
}

export default Case; 