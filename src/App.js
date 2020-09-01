import React from 'react';
import CounterNoCons from './counter/CounterNoCons';
import House from './00_house-lights/House';

function App() {
  return (
    <div style={{width: "600px", margin: "0 auto"}}>
      I am an APP component
      <CounterNoCons />
      <House />
    </div>
  );
}

export default App;
