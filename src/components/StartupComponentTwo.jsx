import React from "react";
import { LuMenuSquare } from "react-icons/lu";

const StartupComponentTwo = () => {
  return (
    <div className="h-screen bg-ss_purple text-white px-[40px] md:px-20 lg:px-28 py-14 lg:py-20">
      <nav className="flex items-center justify-between mb-16 md:mb-28 lg:mb-48">
        <div className="text-ss_logo_text font-bold">Startup3</div>
        <ul className="hidden lg:flex items-center justify-center gap-10 text-white ">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Features</a>
          </li>
          <button className="bg-[#482BE7] px-8 py-3 rounded-full tracking-wide text-white font-normal text-[16px]">
            Sign Up
          </button>
        </ul>
        <div className="flex lg:hidden cursor-pointer">
          <LuMenuSquare className="text-4xl cursor-pointer text-white hover:shadow-lg duration-150 ease-linear transition-shadow" />
        </div>
      </nav>
      <main className="flex flex-col items-center justify-center gap-10">
        <h1 className="text-[50px] md:text-[60px] lg:text-ss_heading text-center font-bold text-white leading-tight w-full md:w-[70%]">
          Let’s make design fast and easy
        </h1>
        <p className="text-white text-ss_paragraph w-full lg:w-[45%] mx-auto text-center">
          The most important part of the Startup is the samples. The samples
          form a set of 25 usable pages you can use as is or you can add new
          blocks from UI Kit.
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-[10px] mt-14 w-full md:w-[70%] lg:w-auto">
          <input
            type="email"
            required
            placeholder="Your Email"
            className="px-8 py-3 rounded-full tracking-wide text-ss_gray placeholder:text-ss_gray placeholder:text-base font-normal text-[16px] bg-transparent border border-ss_gray w-full lg:w-auto"
          />
          <button className="bg-ss_green px-8 py-3 rounded-full tracking-wide text-white font-normal text-[16px] w-full lg:w-auto">
            Send
          </button>
        </div>
      </main>
    </div>
  );
};

export default StartupComponentTwo;
