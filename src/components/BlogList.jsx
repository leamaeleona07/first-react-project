import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="flex flex-col gap-10 blog-list max-w-[40rem] mx-auto rounded-xl ">
      <h2 className="text-pink-500">{title}</h2>
      {/* looping thru each blog, returning a block for each */}
      {blogs.map((blog) => (
        <div
          className="block font-semibold border gap-5 rounded-xl !p-6 w-screen hover:shadow-md"
          // provide id to track each blog
          key={blog.id}
        >
          <Link to={`/blogs/${blog.id} `}>
            <h2>{blog.title}</h2>
            <p>written by {blog.author}</p>
          </Link>
          {/* calls the function handleDelete when clicked */}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
