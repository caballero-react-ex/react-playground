import React, { useState } from 'react';

const MultiCounter = () => {
  const [counts, setCounts] = useState({
    countA: 0,
    countB: 0
  });

  const incrementA = () => (
    setCounts(counts => ({
      ...counts,
      countA: counts.countA + 1
    }))
  )
  
  const incrementB = () => (
    setCounts(counts => ({
      ...counts,
      countB: counts.countB + 1
    }))
  )

  const badIncrementA = () => (
    setCounts(counts => ({
      countA: counts.countA + 1
    }))
  )

  return (
    <div>
      <button 
        onClick={incrementA}
      >
        Increment A
      </button>
      <span style={{marginLeft: "10px"}}>Counter A: {counts.countA}</span>
      <p></p>
      <button
         onClick={incrementB}
      >Increment B</button>
      <span style={{marginLeft: "10px"}}>Counter B: {counts.countB}</span>
      <p></p>
      <button 
        onClick={badIncrementA}
      >
        BAD Increment A
      </button>
      
    </div>
  )


}

export default MultiCounter;