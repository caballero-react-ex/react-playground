import React, { useState } from 'react';
import './AudioApp.css';
import AudioControl from './AudioControl';

const AudioApp = () => {
  const [ volume, setVolume] = useState(7);
  const [ treble, setTreble] = useState(1);
  const [ mid, setMid] = useState(2);
  const [ bass, setBass] = useState(5);

  // VOLUME
  const decVolume = () => {
    if (volume === 0) { return }
    setVolume(volume - 1)
  }
  const incVolume = () => {
    if (volume === 10) { return }
    setVolume(volume + 1)
  }

  // TREBLE
  const decTreble = () => {
    if (treble === 0) { return }
    setTreble(treble - 1)
  }
  const incTreble = () => {
    if (treble === 10) { return }
    setTreble(treble + 1)
  }

   // MID
   const decMid = () => {
    if (mid === 0) { return }
    setMid(mid - 1)
  }
  const incMid = () => {
    if (mid === 10) { return }
    setMid(mid + 1)
  }

  // BASS
  const decBass = () => {
    if (bass === 0) { return }
    setBass(bass - 1)
  }
  const incBass = () => {
    if (bass === 10) { return }
    setBass(bass + 1)
  }

  return (
    <div className="app">
      <AudioControl 
        name={"Volume".toUpperCase()} 
        value={volume} 
        onIncrease={incVolume} 
        onDecrease={decVolume}
      />
  
      <AudioControl 
        name={"Treble".toUpperCase()} 
        value={treble} 
        onIncrease={incTreble} 
        onDecrease={decTreble}
      />
  
      <AudioControl 
        name={"Mid".toUpperCase()}
        value={mid} 
        onIncrease={incMid} 
        onDecrease={decMid}
      />
        
      <AudioControl 
        name= {"Bass".toUpperCase()}
        value={bass} 
        onIncrease={incBass} 
        onDecrease={decBass}
      />
       
    </div>
  )
}

export default AudioApp;