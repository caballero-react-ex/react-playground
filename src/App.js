import React from 'react';
import CounterNoCons from './counter/CounterNoCons';
import House from './00_house-lights/House';
import RedditAxios from './00_api-request/RedditAxios';
import RedditFetch from './00_api-request/RedditFetch';
import OneTimeBtnClass from './00_use-state/OneTimeBtnClass';
import OneTimeBtnHook from './00_use-state/OneTimeBtnHook';
import MultiCounter from './00_use-state/Increment';
import LightSwitch from './00_use-state/LightSwitch';
import RandomList from './00_use-state/RandomList';
import AudioApp from './00_use-state/AudioApp';
import AudioAppWithObject from './00_use-state/AudioAppWithObject';
import Quote from './00_api-request/QuoteAPI';
import InputList from './00_controls/ControlledControl';
import NameInputs from './00_controls/NameInput';


function App() {
  return (
    <div style={{width: "600px", margin: "0 auto"}}>
     
      {/* /// COUNTER ///  */}
      {/* <CounterNoCons />*/}

      {/* /// House Lights /// */}
      {/* <House /> */}

      {/* /// API Calls /// */}
      {/* <RedditAxios subreddit={"reactjs"} /> */}
      {/* <RedditFetch subreddit={"reactjs"} /> */}

      {/* <Quote author={"Bruce%20Lee"} /> */}
      {/* <Quote theme={"death"} />
      <Quote theme={"best"} /> */}

      {/* /// HOOKS /// */}
      {/* <OneTimeBtnClass onClick={() => alert("hi")}/> */}
      {/* <OneTimeBtnHook onClick={() => alert("hi")} />  */}
      {/* <MultiCounter /> */}
      {/* <LightSwitch /> */}
      {/* <RandomList /> */}
      {/* <AudioApp /> */}
      {/* <AudioAppWithObject /> */}

       {/* /// INPUTS /// */}
       {/* <InputList /> */}
       <NameInputs />
    </div>
  );
}

export default App;
