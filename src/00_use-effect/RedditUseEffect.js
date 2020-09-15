import React, { useEffect, useState, useRef } from "react";
import Loader from '../00_api-request/Loader';

function RedditFetch({subreddit, handleClick, handleChange, handleSubmit, input}) {

  const [ posts, setPosts ] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(""); 
  ////// --------
  // ASYNC/AWAIT  / Shorter
  useEffect(() => {

    function handleErrors(response) {
      if(response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    };

    function catchError(error) {
      console.log("the error is: ", error)
      console.warn('could not find a post');
      alert('could not find a post');
      // setError('could not find a post')
    };

    setIsLoading(true);

    const fetchData = async () => {
      await fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then(handleErrors)
      .then(returnedResponse => {
        setPosts(returnedResponse.data.children.map(children => children.data))
      })
      .catch(catchError)
      setIsLoading(false);
    };

    fetchData()
  }, [subreddit]);

  const themes = ["politics", "sports", "gaming", "funny"]
  return(
    
    <div>
      <div>{isLoading ? <Loader /> : ""} </div>
      {/* {error ? (
            <div>{error}</div>
          ) : "" } */}
      <div>
        {themes.map((theme, i) => (
          <button key={i} onClick={() => handleClick(theme)} >{theme} Subreddit</button>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input 
          ref={input}
          placeholder="insert a subreddit"
          onChange={handleChange}
        />
      </form>
      
      
      <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
      </ul>
      
    </div>
  )
}

export default RedditFetch; 



///// FETCH CODES



  ////// --------
  // useEffect with fetch() 
  // useEffect(() => {
  //   function handleErrors(response) {
  //     if (!response.ok) {
  //         throw Error(response.statusText);
  //     }
  //     return response;
  //   }

  //   fetch(`https://www.reddit.com/r/${subreddit}.json`)
  //   .then(handleErrors)
  //   .then(response => response.json())
  //   .then(json => 
  //     setPosts(json.data.children.map(children => children.data))
  //   )
    
    
  //   .catch(error => {
  //       console.log(error);
  //       const errorText = `The subreddit ${subreddit} doesnt exist`;
  //       alert(errorText);
  //     } 
  //   );

  // },[subreddit])

  ////// --------
  // use Effect with fetch() - ASYNC/AWAIT
  // useEffect(() => {
  //   const fetchData = async () => {
 
  //     await fetch(`https://www.reddit.com/r/${subreddit}.json`)
  //       .then(response => {
  //         if(response.ok) {
  //           return response.json();
  //         } else {
  //           throw Error(response.statusText);
  //         }
  //       })
  //       .then((returnedResponse) => {
  //         // Your response to manipulate
  //         setPosts(returnedResponse.data.children.map(children => children.data))
  //       })
  //       .catch(error => {
  //         console.log("the error is: ", error)
  //         console.warn('could not find a post');
  //         const errorText = `The subreddit ${subreddit} doesnt exist`;
  //         alert(errorText);
  //       });
  //   }

  //   fetchData()
  // }, [subreddit]);