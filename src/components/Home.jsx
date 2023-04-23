import React from "react";


const Home = () => {
  return (
    <>
      <div id="home" className=" bg-slate-300 h-screen  dark:bg-gradient-to-r from-black to-polu-500 ">
        <main>
          <div className=" max-w-7xl py-6 px-10 sm:px-10 lg:px-8 ">
            <h1 className="text-7xl font-bold tracking-tight text-purple-800 ">
              Think. Make. Solv.
            </h1>
            <h1 className="text-3xl font-medium tracking-tight text-purple-400">
              Showcasing creativity through code.
            </h1>
            <div className="py-6">
              <button className=" max-w-screen-sm px-5 py-1 rounded-md bg-red-500 border-solid border-2 border-red-500 text-white sm:px-4 lg:px-5">
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
