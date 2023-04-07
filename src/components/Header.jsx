import React, { useState } from "react";

const Header = () => {
  const onToggleMenu = (event) => {
    event.name = event.name === "menu" ? "close" : "menu";
  };

  return (
    <>
      <div className="bg-gradient-to-r from-white to-polu-500 h-screen">
        <header className="bg-white">
          <nav className="flex justify-between items-center w-[92%] mx-auto">
            <div>
              <img
                className="w-16 cursor-pointer"
                src="./imgs/favicon.png"
                alt="polulogo"
              />
            </div>
            <div className="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
              <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                <li>
                  <a className="hover:text-gray-500" href="#home">
                    Home
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-500" href="#About">
                    About
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-500" href="#projects">
                    Projects
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-500" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-6">
              <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]  ">
                Hire Me
              </button>
              <div>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="md:hidden"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  name="close"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 md:hidden"
                  onClick={onToggleMenu}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Header;
