import React, { useState } from "react";
import "./Header.css";

const navigation = [
  { name: "Home", href: "#home", current: true },
  { name: "About", href: "#About", current: false },
  { name: "Projects", href: "#projects", current: false },
  { name: "Contact", href: "#contact", current: false },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    const content = document.getElementById("content");
    if (content.classList.contains("blur-[5px]")) {
      content.classList.remove("blur-[5px]");
    } else {
      content.classList.add("blur-[5px]");
    }
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleMode = () => {
    let html = document.getElementsByTagName("html")[0];
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
    } else {
      html.classList.add("dark");
    }
  };
  return (
    <div className="sticky sm:relative z-[1] top-[-2px] font-[Poppins] bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] h-fit">
      <header className="bg-slate-100 dark:bg-slate-700">
        <nav className="flex justify-between items-center w-[92%] mx-auto ">
          <div className=" z-[2]">
            <img
              className="w-[50px] cursor-pointer"
              src="./imgs/favicon.png"
              alt="..."
            />
          </div>
          <div
            className={`nav-links  z-[1] duration-500 md:static absolute bg-slate-100 dark:bg-slate-700 md:min-h-fit pt-[5rem] pb-[3rem] sm:py-0 left-0 ${
              isMenuOpen ? "z-5  top-0" : "top-[-50vh] z-0  "
            } md:w-auto w-full flex items-center px-5`}
          >
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    className="hover:text-gray-500 dark:hover:text-white"
                    href={item.href}
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-6 z-[2]">
            <button className="bg-[#a6c1ee]  text-white px-5 py-2 rounded-full hover:bg-polu-500">
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
