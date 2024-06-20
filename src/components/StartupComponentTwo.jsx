import React from "react";
import Button from "./reusableComponents/Button";

const StartupComponentTwo = () => {
  return (
    <div className="h-screen bg-black text-white">
      <h1 className="font-bold text-3xl text-red-500">Second Component</h1>
      <Button btnText="Second Comp Btn" className="bg-gray-900 text-white" />
    </div>
  );
};

export default StartupComponentTwo;
