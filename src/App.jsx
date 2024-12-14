import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Project from "./components/Project";
import Blogs from "./components/Blogs"



const App = () => {
  return (
    <Router>
      <Header />

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs/>}/>
          <Route path="/services" element={<Services/>} />
          <Route path="/project" element={<Project/>} />
          <Route path="/blogs" element={<Blogs/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
