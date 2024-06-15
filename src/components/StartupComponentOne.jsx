import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { LuMenuSquare } from "react-icons/lu";

const StartupComponentOne = () => {
  return (
    <div className="px-[40px] md:px-20 lg:px-28 py-14 lg:py-20 h-screen">
      <nav className="flex items-center justify-between mb-16 md:mb-28 lg:mb-48">
        <div className="text-ss_logo_text text-ss_blue font-bold">Startup3</div>
        <ul className="hidden lg:flex items-center justify-center gap-10 text-ss_gray ">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Features</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Shop</a>
          </li>
          <li>
            <IoSearchOutline />
          </li>
        </ul>
        <div className="hidden lg:flex items-center justify-center gap-10">
          <button className="text-ss_gray">Sign In</button>
          <button className="bg-ss_green px-8 py-3 rounded-full tracking-wide text-white font-normal text-[16px]">
            SignUp
          </button>
        </div>
        <div className="flex lg:hidden cursor-pointer">
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
          <button className="bg-ss_green px-8 py-3 rounded-full tracking-wide text-white font-normal text-[16px]">
            Purchase Now For 285$
          </button>
          <button className="px-8 py-3 rounded-full tracking-wide text-ss_green font-normal text-[16px]">
            Learn More
          </button>
        </div>
      </main>
    </div>
  );
};

export default StartupComponentOne;
