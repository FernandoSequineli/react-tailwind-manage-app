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
      </div>
    </nav>
  );
};

export default NavBar;
