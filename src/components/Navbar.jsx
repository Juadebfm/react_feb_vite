import React from "react";

const Navbar = () => {
  return (
    <nav className="px-32 py-10 flex items-center justify-start gap-10 w-full">
      <span className="font-bold text-3xl uppercase text-ss_blue">
        Company Name
      </span>
      <ul className="flex items-center justify-between gap-20">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/pagetwo">Second Component</a>
        </li>
        <li>
          <a href="/features">Features</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
