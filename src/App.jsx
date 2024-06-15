import React from "react";
import StartupComponentOne from "./components/StartupComponentOne";
import StartupComponentTwo from "./components/StartupComponentTwo";

const App = () => {
  return (
    <>
      <StartupComponentOne />
      <div className="h-[3px] w-full bg-ss_gray"></div>
      <StartupComponentTwo />
    </>
  );
};

export default App;
