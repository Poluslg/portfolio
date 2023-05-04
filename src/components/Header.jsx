import React, { useState } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";

const navigation = [
  { name: "Home", link: "/", current: true },
  { name: "About", link: "/About", current: false },
  { name: "Projects", link: "/projects", current: false },
  { name: "Contact", link: "/contact", current: false },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    const content = document.getElementById("content");
    if (content) {
      if (content.classList.contains("blur-[5px]")) {
        content.classList.remove("blur-[5px]");
      } else {
        content.classList.add("blur-[5px]");
      }
      setIsMenuOpen(!isMenuOpen);
    } else {
      setIsMenuOpen(!isMenuOpen);
    }
  };
  const toggleMode = () => {
    let html = document.getElementsByTagName("html")[0];
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.removeItem("dark");
    } else {
      html.classList.add("dark");
      localStorage.setItem("dark", "enabled");
    }
  };
  const navigate = useNavigate();
  const HireMe = () => {
    navigate("/contact");
  };
  return (
    <div className="sticky sm:relative z-[1] font-[Poppins]  h-fit">
      <header className="bg-white  shadow-lg  shadow-blue-500/50 dark:bg-slate-700 dark:border-slate-700 dark:shadow-cyan-500/30 ">
        <nav className="flex justify-between items-center w-[92%] mx-auto h-[3rem]">
          <div className=" z-[2]">
            <a link="/">
              <img
                className="w-[50px] cursor-pointer md:pt-0  mb-1 mt-1"
                src="./imgs/favicon.png"
                alt="PoluLogo"
              />
            </a>
          </div>
          <div
            className={`nav-links  z-[1] duration-500 md:static absolute bg-white dark:bg-slate-700 md:min-h-fit pt-[5rem] pb-[3rem]  md:py-0 left-0 ${
              isMenuOpen ? "z-5  top-0 rounded-2xl " : "top-[-50vh] z-0  "
            } md:w-auto w-full flex items-center px-5 bg-stone-100 `}
          >
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 ">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.link}
                    className="hover:text-red-500 dark:hover:text-white transition ease-out delay-100 duration-500 "
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-6 z-[2]">
            <button
              className="bg-[#a6c1ee] dark:bg-polu-500  text-black dark:text-white px-5 py-2 rounded-full hover:bg-polu-500  dark:hover:bg-[#a6c1ee] dark:hover:text-white  transition duration-500 ease-in-out sm:px-3  "
              onClick={HireMe}
            >
              Hire Me
            </button>
            <div>
              <label className="switch">
                <input type="checkbox" onClick={toggleMode} />
                <span className="slider round"></span>
              </label>
            </div>
            <div className="md:hidden ">
              <ion-icon
                onClick={toggleMenu}
                name={isMenuOpen ? "close" : "menu"}
                className={`text-3xl md:hidden hidden ${
                  isMenuOpen ? "hidden" : ""
                }`}
              ></ion-icon>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
