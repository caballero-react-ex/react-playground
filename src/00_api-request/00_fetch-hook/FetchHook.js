import React, { useState, useEffect } from 'react';
import Loader from '../Loader';
import useDataApi from './useDataApi';
import useDataApiReducer from './useDataApiReducer'

 
function FetchApp() {
  const [ query, setQuery ] = useState('');
  const [ state, doFetch] = useDataApiReducer(
    "https://hn.algolia.com/api/v1/search?query=react", 
    []
  );

  function handleSubmit(e) {
    e.preventDefault();
    doFetch(`https://hn.algolia.com/api/v1/search?query=${query}`);
  }
 
  return (
    <>
      <h4>Fetch App</h4>
      <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={query}
              onChange={event => setQuery(event.target.value)}
            />
            <button type="button">
              Search
            </button>
          </form>
      {state.isError && <div style={{marginTop: "20px"}}>Something went wrong ...</div>}
      {state.isLoading ? <Loader /> : (
        <div>
          <ul>
            {state.data.map(item => (
              <li key={item.objectID}>
                <a href={item.url}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      )} 
      
    </>
  );
}
 
export default FetchApp;