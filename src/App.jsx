import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import StartupComponentOne from "./components/StartupComponentOne";
import StartupComponentTwo from "./components/StartupComponentTwo";
import About from "./pages/About";
import Features from "./pages/Features";
import UseState from "./components/UseState";
// import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<StartupComponentOne />} />
        <Route path="/shop" element={<StartupComponentTwo />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/usestate" element={<UseState />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
