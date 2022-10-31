import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
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
  const [nav, setNav] = useState(false);
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

        <div
          onClick={() => setNav(!nav)}
          className="block md:hidden focus:outline-none"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>

      {nav && (
        <div className="md:hidden">
          <ul
            id="menu"
            className="flex flex-col items-center py-8 mt-10 space-y-8 absolute font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
          >
            {navLinks.map(({ id, link }) => (
              <li key={id}>
                <a onClick={() => setNav((prev) => !prev)} href="/">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
