import React from "react";
import Background from "./Background";

const Home = () => {
  return (
    <>
      <div
        id="home"
        className="bg-[#25CCF7] h-screen  dark:bg-gradient-to-r from-black to-polu-500 "
      >
        <main>
          <div className=" flex relative h-screen">
            <Background />
          </div>
          <div className=" max-w-7xl py-6 px-10 sm:px-10 lg:px-8  absolute top-16">
            <h1 className="text-7xl font-bold tracking-tight text-transparent bg-gradient-to-r from-red-500 to-blue-600    dark:text-transparent  bg-clip-text">
              Think. Make. Solv.
            </h1>
            <h1 className="text-3xl font-medium tracking-tight text-transparent bg-gradient-to-r from-red-500 to-blue-600  dark:text-transparent  bg-clip-text ">
              Showcasing creativity through code.
            </h1>
            <div className="py-6">
              <button className=" max-w-screen-sm px-8  py-2 rounded-md bg-red-500 border-solid border-1 border-red-500 text-white dark:text-black transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-t from-[red] to-[blue] duration-300 sm:px-4 lg:px-5 ">
                Learn more
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
