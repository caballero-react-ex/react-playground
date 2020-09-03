import React, { useState } from 'react';

const RandomList = () => {
  const [items, setItems ] = useState([]);

  const addNumber = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 100)
      }
    ])
  };

  const resetNumber = () => {
    setItems([])
  }

  return (
    <div 
      style={{marginTop: "20px"}}
    >
      <button
        style={{padding: "5px 10px"}}
        onClick={addNumber}
      >
        Add a number
      </button>
      <button
        style={{
          padding: "5px 10px",
          marginLeft: "10px"
        }}
        onClick={resetNumber}
      >
        Reset
      </button>

      <ul 
        style={{
          paddingLeft: "0",
          margin: "20px 0px"
        }}
      >
        {items.map(item => (
          <li 
            style={{
              listStyleType: "none",
              display: "inline",
              marginRight: "30px",
            }}
            key={item.id}
          >
            {item.value}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RandomList;