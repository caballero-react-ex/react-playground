import React, { useState, useRef } from 'react';
import RedditFetch from './RedditUseEffect';


function RedditParent() {
  const [ subreddit, setSubreddit ] = useState("ugly")

  const inputRef = useRef();

  function handleClick(theme) {
    setSubreddit(theme)
    console.log(theme)
  }

  function handleChange(e) {
    // setSubreddit(e.target.value)
    // alert("halo")
    console.log("OnChange", e.target.value)
    
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log("onSubmit", inputRef.current.value)
    setSubreddit(inputRef.current.value)
    inputRef.current.value = ""
    // setSubreddit(e.target.value)
  }

  return (
      <RedditFetch 
        subreddit={subreddit}
        handleClick={handleClick}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        input={inputRef}
      />    
  )
}

export default RedditParent;