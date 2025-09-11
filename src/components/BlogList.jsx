const BlogList = ({props}) => {

    const blogs = props.blogs;

    console.log(props,blogs);
    return ( 
        <div className="blog-list">
            {blogs.map((blog ) => (
          <div className="flex flex-row text-center font-semibold leading-10 border gap-2" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>written by {blog.author}</p>
          </div>

        ))}
        </div>
     );
}
 
export default BlogList;