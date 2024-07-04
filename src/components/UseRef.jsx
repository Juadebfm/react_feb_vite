import { useState, useRef, useEffect } from "react";

const UseRef = () => {
  const [value, setValue] = useState(0); // for the increment logic

  const prevValueRef = useRef();

  useEffect(() => {
    prevValueRef.current = value; //
  }, [value]);

  const increment = () => {
    setValue(value + 1);
  };

  return (
    <div>
      <p>Current Value: {value}</p>
      <p>Previous Value: {prevValueRef.current}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default UseRef;
