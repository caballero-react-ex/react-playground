import React, { useReducer } from 'react';

function Counter() {

  // con la funcion reducer afuera
  // const reducer = (state, action) => {
  //   return state + action;
  // }

  // const [sum, dispatch] = useReducer(reducer, "B");

  // con la funcion reducer dentro como un animous function
  const [sum, dispatch] = useReducer((state, action) => {
    return state + action
  }, 10);

  return(
  <div>
     <button onClick={() => dispatch(1)}> 
      Add U
    </button>
    <span style={{marginLeft: "20px"}}>
      {sum}
    </span>
    
   
  </div>
  )
}

export default Counter; 