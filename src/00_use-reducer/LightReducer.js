import React, { useReducer } from 'react';
import './LightReducer.css';



const reducer = (state, action) => {
  switch (action.type) {
    case "levelUp": 
      if(state === 3) return state;
      return state + 1

    case "levelDown": 
      if(state === 0) return state;
      return state - 1

    case "off": return 0

    default:
      return state;
  }
}

function LightReducer() {
  const [lightLevel, dispatch] = useReducer(reducer, 0);

  function handleLightOn() {
    dispatch({
      type: 'levelUp', 
    })
  }

  function handleLightOff() {
    dispatch({
      type: 'levelDown'
    })
  }

  function handleAllOff() {
    dispatch({
      type: 'off'
    })
  }

  function html() {
    const caseOff =  <div className="light light-off">OFF</div>
    const caseLow =  <div className="light light-low">LOW</div> 
    const caseMed =  <div className="light light-med">MEDIUM</div>
    const caseHi =   <div className="light light-hi">HIGH</div>
    const broken = <div className="light light-br">BROKEN</div>

    switch(lightLevel) {
      case 0:
        return (
          caseOff
        )
      case 1: 
        return (
          caseLow
        )
      case 2: 
        return (
          <> 
            {caseMed}
            {caseLow}
          </>
        )
      case 3: 
        return (
          <> 
            {caseHi}
            {caseMed}
            {caseLow}
          </>
        )
        default:
          return broken;    
    }
  }


  return(
    <div>
       <h1>Light Reducer</h1>
       <div className="light-container">
        {html(lightLevel)}
       </div>
       <button style={{marginRight: "10px"}} onClick={handleLightOn} >Light Up</button>
       <button style={{marginRight: "10px"}} onClick={handleLightOff}>Light Down</button>
       <button onClick={handleAllOff} >Light Off</button>
    </div>
  )
}

export default LightReducer; 