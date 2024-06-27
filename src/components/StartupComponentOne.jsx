import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { LuMenuSquare } from "react-icons/lu";
import Button from "./reusableComponents/Button";

function signIn() {
  console.log("Sign In Clicked");
}

const StartupComponentOne = () => {
  // create the hook
  const [isMenuOpen, setIsMenuOpen] = useState(false); //isMenuOpen = false

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="px-[40px] md:px-20 lg:px-28 py-14 lg:py-20 h-screen">
      <nav className="flex items-center justify-between mb-16 md:mb-28 lg:mb-48">
        <div className="text-ss_logo_text text-ss_blue font-bold">Startup3</div>
        <ul
          className={`absolute lg:static bg-ss_blue lg:bg-transparent h-[50vh] lg:h-auto p-16 lg:p-0 top-[130px] right-0 flex-col lg:flex-row w-[70%] text-white lg:flex items-center justify-center gap-10 lg:text-ss_gray ${
            isMenuOpen ? "flex" : "hidden"
          }`}
        >
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/features">Features</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/shop">Shop</a>
          </li>
          <li>
            <a href="/usestate">
              <IoSearchOutline />
            </a>
          </li>
        </ul>
        <div className="hidden lg:flex items-center justify-center gap-10">
          <Button
            btnText="SignIn"
            className="text-ss_gray"
            onClick={() => signIn()}
          />

          <Button
            btnText="SignUp"
            className="bg-ss_green text-white"
            onClick={() => console.log("I am the Signup button on the nav")}
          />
        </div>
        <div className="flex lg:hidden cursor-pointer" onClick={toggleMenu}>
          <LuMenuSquare className="text-4xl cursor-pointer text-ss_blue hover:shadow-lg duration-150 ease-linear transition-shadow" />
        </div>
      </nav>
      <main className="flex flex-col items-center justify-center gap-10">
        <h1 className="text-[50px] md:text-[60px] lg:text-ss_heading text-center font-bold text-ss_blue leading-tight lg:leading-normal">
          Startup Framework
        </h1>
        <p className="text-ss_gray text-ss_paragraph w-full lg:w-[45%] mx-auto text-center">
          We made it so beutiful and simple. It combines landings, pages, blogs
          and shop screens. It is definitely the tool you need in your
          collection!
        </p>
        <div className="flex flex-col space-y-3 mt-14 w-full md:w-[70%] lg:w-auto">
          <Button
            btnText="Purchase Now For 285$"
            className="bg-ss_green text-white"
            onClick={() => console.log("I am the payment button on the Main")}
          />

          <Button
            btnText="Learn More"
            className="text-ss_green font-bold"
            onClick={() => console.log("I am the Learnmore button on the Main")}
          />
        </div>
      </main>
    </div>
  );
};

export default StartupComponentOne;
