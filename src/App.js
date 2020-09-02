import React from 'react';
import CounterNoCons from './counter/CounterNoCons';
import House from './00_house-lights/House';
import RedditAxios from './00_api-request/RedditAxios';
import RedditFetch from './00_api-request/RedditFetch';

function App() {
  return (
    <div style={{width: "600px", margin: "0 auto"}}>
     
      {/* <CounterNoCons />
      <House /> */}
      <RedditAxios subreddit={"reactjs"} />
      {/* <RedditFetch subreddit={"reactjs"} /> */}
    </div>
  );
}

export default App;
