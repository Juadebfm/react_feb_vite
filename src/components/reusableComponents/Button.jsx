import React from "react";

const Button = ({ className, btnText, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-3 rounded-full tracking-wide font-normal text-base ${className}`}
    >
      {btnText}
    </button>
  );
};

export default Button;
