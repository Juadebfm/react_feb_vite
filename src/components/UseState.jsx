import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-500 text-white">
      <small>
        <a href="/">Go Back</a>
      </small>
      <h1 className="font-bold text-3xl text-center">Count: {count}</h1>
      <button
        className="bg-blue-500 text-white text-sm rounded-md px-8 py-2 cursor-pointer hover:shadow-xl mt-8"
        onClick={increment}
      >
        Increase Count Value
      </button>
    </div>
  );
};

export default UseState;

// import the useState hook from react
