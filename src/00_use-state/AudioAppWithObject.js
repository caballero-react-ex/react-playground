import React, { useState } from 'react';
import './AudioApp.css';
import AudioControl from './AudioControl';

const AudioAppWithObject = () => {
  const [{ volume, bass, mid, treble }, setValues] = useState({
    volume: 9,
    bass: 1,
    mid: 5,
    treble: 3
  });

  const increase = controlName => () => {
    if (eval(controlName) === 10) { return }
    setValues(values => ({
      ...values,
      [controlName]: values[controlName] + 1
    }));
  }

  const decrease = controlName => () => {
    if (eval(controlName) === 0) { return }
    setValues(values => ({
      ...values,
      [controlName]: values[controlName] - 1
    }));
  }

  return(
    <div className="app">
      <AudioControl 
        name={"Volume".toUpperCase()} 
        value={volume} 
        onIncrease={increase('volume')} 
        onDecrease={decrease('volume')}
      />
       <AudioControl 
        name={"Mid".toUpperCase()} 
        value={mid} 
        onIncrease={increase('mid')} 
        onDecrease={decrease('mid')}
      />
       <AudioControl 
        name={"Treble".toUpperCase()} 
        value={treble} 
        onIncrease={increase('treble')} 
        onDecrease={decrease('treble')}
      />
       <AudioControl 
        name={"Bass".toUpperCase()} 
        value={bass} 
        onIncrease={increase('bass')} 
        onDecrease={decrease('bass')}
      />
    </div>
  )
}

export default AudioAppWithObject;