import React, { useState } from 'react';
import RedditFetch from './RedditUseEffect'

function RedditParent() {
  const [ subreddit, setSubreddit ] = useState("reactjs")

  function handleClick(theme) {
    setSubreddit(theme)
    console.log(theme)
  }

  return (
    <RedditFetch subreddit={subreddit} handleClick={handleClick}/>
  )
}

export default RedditParent;