import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../useFetch";
import Loader from "./Loader";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: blogs, error, isPending } = useFetch("http://localhost:3000/blogs/" + id);

  const handleDelete = async (e) => {
    try {
      const res = await fetch('http://localhost:3000/blogs/' + blogs.id, {
        method: 'DELETE',
      });
        navigate('/')

    } catch (error) {
      console.log(error);
    }
  }
  if (isPending) {
    return (
      <Loader />
    )
  };
  return (
    <div className="Blog-Details">
      
      {error && <div>{error}</div>}
      {blogs && (
        <article className="flex flex-col items-center h-screen">
          <h2 className="text-3xl font-bold mb-4 text-pink-400">
            {blogs.title}
            </h2>
                  <p className="text-gray-500">written by {blogs.author}</p>
                  <div className="mt-10 text-lg leading-relaxed indent-8"> {blogs.body}</div>
                  <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
