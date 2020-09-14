import React, { useState, useEffect, useRef } from 'react';

function DocumentName() {

  const [ name, setName ] = useState(document.title)

  const namesArray = ["hey", "apple", "tiburon", "auto", "hello", 1, 230, "Lionel Ritchie", String.fromCodePoint(0x1F354)]
  
  function handleClick() {
    setName(namesArray[Math.floor(Math.random() * namesArray.length)])
    console.log(typeof name)
    console.log(name)
  }


  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    alert(`document name is changed to: ${inputRef.current.value}`)
    // setName(inputRef)
    inputRef.current.value = ""
  }
 

  useEffect(() => {
    inputRef.current.focus();
    document.title = name;
  }, [inputRef])

  useEffect(() => {
    document.title = name;
  })

  function handleChange(e) {
    setName(e.target.value)
  } 

  return(
    <>
      <div>
        <button onClick={handleClick}>
        Change Document Name Random
        </button>
        <p>The name of the document is <span style={{fontWeight: "bold"}}>{name}</span></p>
      </div>
      <form onSubmit={handleSubmit}>
        <input 
          ref={inputRef}
          placeholder="insert a document name"
          // value={name}
          onChange={handleChange}
        />
      <button>Change Doc. Name</button>
      </form>
    </>
  )
}

export default DocumentName;