import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [author, setAuthor] = useState("mario");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    try {
      const res = await fetch("http://localhost:3000/blogs", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(blog),
      });

      if (!res.ok) {
        throw new Error("Failed to create blog");
      }

      console.log("New blog added");
      alert("blog successfully added")
      navigate ("/") 
    } catch (error) {
      console.error("Error creating blog:", error);
      alert('an error occurred')
    } finally {
      setIsPending(false);
    }
  };
  return (
    <div className="create">
      <h2>Add A New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <label>Blog Author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">Mario</option>
          <option value="Jane smith">Jane smith</option>
        </select>
        <button>{ !isPending ? "Add Blog" : "Adding blog..."}</button>
        {/* {isPending && <button disabled>Adding blog...</button>} */}
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
    </div>
  );
};

export default Create;
