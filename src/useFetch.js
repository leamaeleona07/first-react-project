import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    const AbortCont = new AbortController();

    const fetchBlogs = async () => {
      try {
        const res = await fetch(url, {signal: AbortCont.signal});
        
        const data = await res.json();
        // updates the value of blog
        setData(data);
      } catch (error) {
        if (error.name === 'AbortError') {
          console.log('fetch aborted');
        } else {
          setError("could not fetch the data for that resource");
          console.error(error);
        }
      } finally {
          setIsPending(false);
        
      }
    };

    //   sets the timeout for fetchBlogs in 1sec
    setTimeout(() => (fetchBlogs()), 3000);

    return () => AbortCont.abort();
    
  }, [url]);
  return { error, data, isPending }; 
};

// export the function so we could use it in other files
export default useFetch;
