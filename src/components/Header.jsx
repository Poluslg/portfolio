import React, { useState } from "react";

const navigation = [
  { name: 'Home', href: '#home', current: true },
  { name: 'About', href: '#About', current: false },
  { name: 'Projects', href: '#projects', current: false },
  { name: 'Contact', href: '#contact', current: false },
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="font-[Poppins] bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee]  ">
      <header className="bg-white">
        <nav className="flex justify-between items-center w-[92%] mx-auto">
          <div>
            <img
              className="w-[50px] cursor-pointer"
              src="./imgs/favicon.png"
              alt="..."
            />
          </div>
          <div
            className={`nav-links duration-500 md:static absolute bg-gray-200 md:min-h-fit min-h-[60vh] left-0 ${isMenuOpen ? "top-0 fixed w-full " : "top-[-100%]"
              } flex items-center px-5 rounded-[11px]`}
          >
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 w-[37rem]">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gradient-to-r from-gray-200 to-black text-black' : 'text-black hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-6">
            <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
              Hire Me
            </button>
            <ion-icon
              onClick={toggleMenu}
              name={isMenuOpen ? "close" : "menu"}
              className="text-3xl cursor-pointer md:hidden"
            ></ion-icon>
          </div>
        </nav>
      </header>
    </div>
  );
}
