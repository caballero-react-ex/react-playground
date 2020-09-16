import { useState, useEffect } from 'react';
// import Loader from '../Loader';

const useDataApi = (initialUrl, initialData) => {
  const [data, setData] = useState(initialData);
  const [ url, setUrl ] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError ] = useState(false);

  useEffect(() => {
    function handleErrors(response) {
      if(response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    };

    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await fetch(url)
        .then(handleErrors);
        setData(result.hits);
      } catch (error) {
        setIsError(true)
      }

      setIsLoading(false);
    }
    
    fetchData();
    
  }, [url]);

  return [{data, isLoading, isError }, setUrl];
}

export default useDataApi;