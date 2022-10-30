import React from "react";
import logo from "../assets/logo.svg";

const navLinks = [
  {
    id: 1,
    link: "Pricing",
  },
  {
    id: 2,
    link: "Product",
  },
  {
    id: 3,
    link: "About Us",
  },
  {
    id: 4,
    link: "Careers",
  },
  {
    id: 5,
    link: "Community",
  },
];

const NavBar = () => {
  return (
    <nav className="container relative mx-auto p-6">
      <div className="flex justify-between items-center">
        <div className="pt-2">
          <img src={logo} alt="Logo" />
        </div>
        <div className="hidden md:flex">
          <ul className="flex flex-row space-x-6">
            {navLinks.map(({ id, link }) => (
              <li
                key={id}
                className="hover:text-darkGrayishBlue cursor-pointer"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
        <a
          href="/"
          className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight duration-300"
        >
          Get Started
        </a>
        <button
          id="menu-btn"
          className="block hamburger md:hidden focus:outline-none"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      <div class="md:hidden">
        <div
          id="menu"
          className="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
        >
          <a href="/">Pricing</a>
          <a href="/">Product</a>
          <a href="/">About Us</a>
          <a href="/">Careers</a>
          <a href="/">Community</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
