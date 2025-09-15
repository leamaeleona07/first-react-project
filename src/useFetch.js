import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        // updates the value of blog
        setBlogs(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsPending(false);
      }
    };

    //   sets the timeout for fetchBlogs in 1sec 
    setTimeout(() => fetchBlogs(), 1000);
  }, []);
  return {blogs, isPending}
};

// export the function so we could use it in other files
export default useFetch;