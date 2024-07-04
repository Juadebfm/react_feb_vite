import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import StartupComponentOne from "./components/StartupComponentOne";
import About from "./pages/About";
import Features from "./pages/Features";
import UseState from "./components/UseState";
import { WeatherProvider } from "./context/WeatherContext";
import WeatherDetails from "./components/WeatherDetails";
// import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <WeatherProvider>
        <Routes>
          <Route path="/" element={<StartupComponentOne />} />
          <Route path="/shop" element={<WeatherDetails />} />

          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/usestate" element={<UseState />} />
        </Routes>
      </WeatherProvider>
    </BrowserRouter>
  );
};

export default App;
