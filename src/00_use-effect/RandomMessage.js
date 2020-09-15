import React, { useState, useEffect } from 'react';

function RandomMessage() {

  const [ message, setMessage ] = useState({
    text: "", 
    author: ""
  });

  useEffect(()=> {
    fetch("https://quote-garden.herokuapp.com/api/v2/quotes/random")
    .then(response => response.json())
    .then(json => 
      setMessage({
        text: json.quote.quoteText,
        author: json.quote.quoteAuthor
      })
    )
  })

  function handleClick() {
    alert(`${message.text} --- ${message.author}`)
  }

  useEffect(() => {
    const announceClick = e => 
      console.log("clicked", e.clientX, e.clientY);
    
    document.addEventListener('click', announceClick);

    return () => 
      document.removeEventListener('click', announceClick);
  }, []);
  

  return (
    <div style={{borderTop: "2px solid grey", marginTop: "30px"}} >
      <p>Random Message App</p>
      <button onClick={handleClick} > Click to get a random message</button>
      <p>Click outside the button to see a secret message</p>
    </div>
  )
}

export default RandomMessage;