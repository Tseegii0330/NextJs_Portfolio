import Image from "next/image";
import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";

export const Main = () => {
  return (
    <div className="w-100 h-screen flex justify-center items-center">
      <div className="max-w-[1240px] w-full h-screen p-2 flex flex-col md:justify-around items-center md:flex-row-reverse ">
        <div className="py-10 relative">
          <div className="before:block before:absolute before:top-20 before:-inset-1 before:h-[300px] before:w-[300px] before:rounded-lg before:-skew-y-2 before:bg-pink-500">
            <Image
              className="rounded-full relative my-10"
              src="/../public/assets/myimages/me.jpg"
              alt="/"
              width={"300"}
              height={"300"}
            />
          </div>
        </div>
        <div className="my-0 flex items-center justify-center flex-col md:items-start">
          <p className="uppercase">Let`s build something together</p>
          <h1 className="py-2 text-gray-700">
            Hi, I`m <span className="text-green-600">Tserendorj</span>
          </h1>
          <h1 className="text-orange-400 py-2">Web Developer</h1>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 place-items-center absolute top-[80%] w-100 left-[50%] right-[50%] z-[100  ">
        <div className="flex justify-center items-center animate-bounce rounded-full border shadow-lg shadow-grey-400 p-5">
          <AiOutlineArrowDown width="50" />
        </div>
      </div>
    </div>
  );
};
