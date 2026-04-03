import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import MainLayout from "./layouts/MainLayout";
import Polls from "./pages/Polls";
import About from "./pages/About";

const App = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      smooth: true,
    });

    return () => scroll.destroy();
  }, []);

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/polls" element={<Polls />} />
        <Route path="/about-us" element={<About />} />
      </Route>
    </Routes>
  );
};

export default App;
