import { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./header";
import "./index.css";
import Button from "./components/Button";
import BlogList from "./components/BlogList";

const App = () => {
  // const [count, setCount] = useState(0)
  const [name, setName] = useState("ivan");
  const [age, setAge] = useState(21);

  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "The Art of Coding",
      body: "Coding is a blend of creativity and logic, where the possibilities are endless. It's about problem-solving and continuous learning.",
      author: "John Doe",
    },
    {
      id: 2,
      title: "The Future of AI",
      body: "Artificial intelligence is transforming industries, with applications in healthcare, finance, and even creative fields. The future is now.",
      author: "Jane Smith",
    },
    {
      id: 3,
      title: "Exploring the Cosmos",
      body: "Space exploration is reaching new heights. From Mars rovers to private space travel, humanity is stepping into an exciting new era.",
      author: "Alice Johnson",
    },
  ]);

  const handleClick = () => {
    setName("lea");
  };
  const handleClick1 = () => {
    setName("ivan");
  };

  return (
    <>
      <Header />
      <Navbar />
      <BlogList blogs={blogs} />
      <div className="Home h-screen">
        {blogs.map((blog ) => (
          <div className="flex flex-row text-center font-semibold leading-10 border gap-2" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>written by {blog.author}</p>
          </div>
        ))}

        <h1 className="text-blue-500 text-center">
          {name} is {age} years old
        </h1>
        <Button onClick={handleClick} className={'text-white bg-fuchsia-500'} >Click me</Button>

        <Button onClick={handleClick1} className={'text-white bg-teal-500'} >
          Sbumit
        </Button>
      </div>
    </>
  );
};

export default App;

// <div>
//   <a href="https://vite.dev" target="_blank" >
//     <img src={viteLogo} className="logo" alt="Vite logo" />
//   </a>
//   <a href="https://react.dev" target="_blank">
//     <img src={reactLogo} className="logo react" alt="React logo" />
//   </a>
// </div>
// <h1 className='text-red-500 flex flex-row  items-center'>LEAH + vite</h1>
// <div className="card">
//   <button onClick={() => setCount((count) => count + 1)}>
//     count is {count}
//   </button>
//   <p>
//     Edit <code>src/App.jsx</code> and save to test HMR
//   </p>
// </div>
// <p className="read-the-docs">
//   Click on the Vite and React logos to learn more
// </p>
