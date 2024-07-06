import React, { useState } from "react";

const UseState = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleClick = () => {
    setIsToggled(!isToggled);
  };

  const buttonClass = isToggled
    ? "bg-blue-500 text-white py-2 px-4 rounded-md"
    : "bg-gray-500 text-white py-2 px-4 rounded-md";

  const buttonText = isToggled ? "Blue Bg" : "Gray Bg";
  return (
    <button className={buttonClass} onClick={handleClick}>
      {buttonText}
    </button>
  );
};

export default UseState;

fetch().then().then().then();
