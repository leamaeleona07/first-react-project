import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Header from "./header";
import "./index.css";
import BlogList from "./components/BlogList";
import useFetch from "./useFetch";



const App = () => {
  const { blogs, isPending } = useFetch('http://localhost:8000/blogs'); 
  // const { blogs: newData, isPending: isNewDFataPendig } = useFetch('http://localhost:8000/blogs');
  const [name, setName] = useState("ivan");
  const [age] = useState(21);
  const [nameL, setNameL] = useState("LEA");
  // const [blogs, setBlogs] = useState(null);
  // const [isPending, setIsPending] = useState(true);
  // useEffect(() => {
  //   const fetchBlogs = async () => {
  //     try {
  //       const res = await fetch("http://localhost:8000/blogs");
  //       const data = await res.json();
  //       // updates the value of blog
  //       setBlogs(data);
        
  //     } catch (error) {
  //       console.error(error);
  //     }
  //     finally {
  //       setIsPending(false);
  //     }
  //   };

  //  setTimeout(() => fetchBlogs(), 1000);
  //   // setTimeout(
  //   //   () =>
  //   //     (async function () {
  //   //       try {
  //   //         const res = await fetch("http://localhost:8000/blogs");
  //   //         const data = await res.json();
  //   //         setBlogs(data);
  //   //         setIsPending(false);
  //   //       } catch (error) {
  //   //         console.error(error);
  //   //       }
  //   //     })(),
  //   //   1000
  //   // );
  // }, []);

  return (

    <>
      <Header />
      <Navbar />

      <div className="Home h-screen w-screen flex flex-col justify-center items-center">
          {isPending && <div>Loading...</div>}
          
          
        {blogs && <BlogList blogs={blogs} title="All Blogs" />}

        <h1 className="text-blue-500 text-center">
          {name} is {age} years old
        </h1>

        <div className="flex gap-4">
          <button
            onClick={() => setName("lea")}
            className="bg-teal-100 px-4 py-2 rounded"
          >
            Click me
          </button>
          <button
            onClick={() => setName("ivan")}
            className="bg-teal-400 px-4 py-2 rounded"
          >
            Click me Again
          </button>
          <button
            onClick={() => setNameL("MAE")}
            className="bg-teal-700 px-4 py-2 rounded text-white"
          >
            Change name
          </button>
        </div>

        <p className="text-center mt-4">{nameL}</p>
      </div>
      </>
  );
};

export default App;

// exporting so we could still use this in other files

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
