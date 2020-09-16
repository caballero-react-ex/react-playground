import { useState, useEffect, useReducer } from 'react';

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return { 
        ...state, 
        isLoading: true, 
        isError: false
       };
    case 'FETCH_SUCCESS':
      return { 
        ...state, 
        isLoading: false, 
        isError: false,
        data: action.payload
      };
    case 'FETCH_FAILURE':
      return { 
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
};

const useDataApiReducer = (initialUrl, initialData) => {
  const [ url, setUrl ] = useState(initialUrl);

  const [ state, dispatch ] = useReducer(dataFetchReducer, {
    isLoading: false, 
    isError: false, 
    data: initialData,
  });

  useEffect(() => {
    function handleErrors(response) {
      if(response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    };

    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });

      try {
        const result = await fetch(url)
        .then(handleErrors);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.hits });
      } catch (error) {
        dispatch({ type: 'FETCH_FAILURE' })
      }
    }
    
    fetchData();
    
  }, [url]);

  return [ state, setUrl ];
}



export default useDataApiReducer;