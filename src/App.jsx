import Navbar from "./components/Navbar";
import Home from "./Home";
import Create from "./components/Create";
import BlogDetails from "./components/BlogDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          {/* React Router listens to changes in the browser URL.
                It matches the URL with a defined <Route> path.
                When matched, it renders the component assigned to that route. (create) */}
          <Route exact path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/blogs/:id" element={<BlogDetails />} /> 
          <Route path="*" element={<div>NOT FOUND</div>} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
