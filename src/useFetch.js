// Custom hook
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {

    const fetchBlogs = async () => {
      try {
        const res = await fetch(url);
        
        const data = await res.json();
        // updates the value of blog
        setData(data);
      } catch (error) {
          setError("could not fetch the data for that resource");
          console.error(error);
        
      } finally {
          setIsPending(false);
        
      }
    };

    //   sets the timeout for fetchBlogs in 1sec
    setTimeout(() => (fetchBlogs()), 3000);
    
  }, [url]);
  return { error, data, isPending }; 
};

// export the function so we could use it in other files
export default useFetch;
