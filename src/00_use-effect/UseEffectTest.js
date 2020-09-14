import React, { useState, useEffect, useRef } from 'react';

function UseEffectTest() {

  const inputRef = useRef();

  const [text, setText] = useState('');

  // useEffect(() => {
  //   console.log('latest value:', text);
  //   inputRef.current.focus();
  // }, [inputRef]);

  useEffect(() => {
    console.log('mounted');
    return () => console.log('unmounting...');
  }, []);

  return(
    <div>
      <input
        ref={inputRef}
        value={text}
        onChange={e => setText(e.target.value)} 
      />
    </div>
  )
}

export default UseEffectTest;