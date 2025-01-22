import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("/");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const handleActiveLink = (link) => {
    navigate(link);
    setActiveLink(link);
    if (isMobileMenuOpen) setIsMobileMenuOpen(false); // Close mobile menu on link click
  };

  return (
    <>
      <div className="hidden md:flex justify-center mx-auto bg-black p-[5px] w-[400px] rounded-[50px] absolute top-0 -right-[50px] -left-[50px] border-[2px] border-[#28282865] ">
        <ul className="flex items-center space-x-6 text-white">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className={`cursor-pointer ${activeLink === link.path
                  ? "px-4 py-1 rounded-full bg-[#323232] transition"
                  : ""
                }`}
              onClick={() => handleActiveLink(link.path)}
            >
              {link.name}
            </li>
          ))}
          <li>
            <button
              href="/"
              className="px-4 py-1 bg-gradient-to-t from-[#e72434] to-[#030305] rounded-full hover:opacity-90 transition"
            >
              Register
            </button>
          </li>
        </ul>
      </div>

      <nav className="bg-black text-white px-12 py-4 fixed top-0 left-0 right-0 z-50 md:hidden">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button
            className="ml-auto text-sky-500"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <ul className="md:hidden mt-4 space-y-4 text-sm text-center">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className={`cursor-pointer ${activeLink === link.path
                    ? "px-4 py-1 rounded-full bg-[#323232] transition"
                    : ""
                  }`}
                onClick={() => handleActiveLink(link.path)}
              >
                {link.name}
              </li>
            ))}
            <li>
              <button
                href="#"
                className="block px-4 py-2 bg-gradient-to-r from-sky-500 to-sky-300 rounded-full hover:opacity-90 transition"
              >
                Register
              </button>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
}

export default Navbar;
