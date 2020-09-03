import React from 'react';
import './AudioControl.css';

const AudioControl = ({name, value, onIncrease, onDecrease}) => {
  
  return (
    <div className="item">
      <button 
        className="btn"
        onClick={onDecrease}
      > &#8722; </button>
      <div className="item-text">
        <span>{value}</span>
        <span>{name}</span>
      </div>
      <button 
        className="btn"
        onClick={onIncrease}
      > + </button>  
    </div>
  )
}

export default AudioControl;

