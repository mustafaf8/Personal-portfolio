import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-5 left-8 max-[1200px]:left-7 max-[1000px]:left-5 max-[600px]:left-3 max-[400px]:left-2 w-[95%] bg-secondary/70 backdrop-blur-md rounded-full z-10 shadow-lg">
      <div className="container mx-auto px-10 py-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white hover:text-primary transition-colors duration-300">
          Adınız
        </h1>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none text-white hover:text-primary"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <ul
          className={`md:flex space-x-6 ${
            isOpen
              ? "block absolute top-full left-0 w-full bg-secondary/80 backdrop-blur-md p-4 rounded-b-2xl"
              : "hidden"
          } md:block`}
        >
          <li>
            <a
              href="/"
              className="block py-2 md:py-0 text-white hover:text-primary transition-colors duration-200"
            >
              Ana Sayfa
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="block py-2 md:py-0 text-white hover:text-primary transition-colors duration-200"
            >
              Hakkımda
            </a>
          </li>
          <li>
            <a
              href="/services"
              className="block py-2 md:py-0 text-white hover:text-primary transition-colors duration-200"
            >
              Hizmetler
            </a>
          </li>
          <li>
            <a
              href="/portfolio"
              className="block py-2 md:py-0 text-white hover:text-primary transition-colors duration-200"
            >
              Portföy
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="block py-2 md:py-0 text-white hover:text-primary transition-colors duration-200"
            >
              İletişim
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
