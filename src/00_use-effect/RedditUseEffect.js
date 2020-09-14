import React, { useEffect, useState } from "react";

function RedditFetch({subreddit, handleClick}) {

  const [ posts, setPosts ] = useState([]);

  useEffect(() => {
    fetch(`https://www.reddit.com/r/${subreddit}.json`)
    .then(response => response.json())
    .then(json => 
      setPosts(json.data.children.map(children => children.data))
    )
  },[ subreddit, setPosts, handleClick ])

  console.log(posts)

  
  const themes = ["politics", "sports", "gaming"]
  return(
    
    <div>
      <div>
        {themes.map((theme, i) => (
          <button key={i} onClick={() => handleClick(theme)} >{theme} Subreddit</button>
        ))}
      </div>
      
      <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
      </ul>
      
    </div>
  )
}

export default RedditFetch; 