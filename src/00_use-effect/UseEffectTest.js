import React, { useState, useEffect } from 'react';

function UseEffectTest() {

  const [text, setText] = useState('');

  useEffect(() => {
    console.log('latest value:', text);
  });

  return(
    <div>
      <input
        value={text}
        onChange={e => setText(e.target.value)} 
      />
    </div>
  )
}

export default UseEffectTest;