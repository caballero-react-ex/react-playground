import React, { useState } from 'react';
// import Case from './00_use-reducer/Case';
// import Keypad from './00_use-reducer/CaseSolution';
// import UseEffectTest from './00_use-effect/UseEffectTest';
// import LightReducer from './00_use-reducer/LightReducer';
// import DocumentName from './00_use-effect/DocumentName'
// import RedditParent from './00_use-effect/RedditFecthParent';
// import RandomMessage from './00_use-effect/RandomMessage';
import FetchApp from './00_api-request/00_fetch-hook/FetchHook';
import RoomStore from './01_context-api/RoomContext';
import Room from './01_context-api/Room';

function App() {

  return (
    <>
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

      {/* <NameInputs />
      <NameInputsUncontrolled />
      <NameInputsClass />
      <NameInputsUncontrolledClass /> */}
      
      {/* <PizzaAppClass /> */}

      {/* USE-REDUCER */}
      {/* <Counter /> */}
      {/* <ShoppingList /> */}
      {/* <LightReducer /> */}
      {/* <Case combo={"1111"}/> */}
      {/* <Keypad combo={"6342"} /> */}

      {/* USE-EFFECT */}
      {/* <UseEffectTest /> */}
      {/* <DocumentName / >  */}
      {/* <RedditParent /> */}

      {/* <RandomMessage /> */}
      {/* <FetchApp /> */}

      {/* CONTEXT API */}
      
      <Room />
    </>
       

   
  );
}

export default App;
