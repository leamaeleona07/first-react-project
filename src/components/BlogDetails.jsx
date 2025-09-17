import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import Loader from "./Loader";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blogs, error, isPending } = useFetch("http://localhost:3000/blogs/" + id);
  
  if (isPending) {
    return (
      <Loader />
    )
  };
  return (
    <div className="Blog-details">
      
      {error && <div>{error}</div>}
      {blogs && (
        <article>
          <h2>{blogs.title}</h2>
                  <p>written by {blogs.author}</p>
                  <div> {blogs.body}</div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
