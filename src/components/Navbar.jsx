// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <header className="w-full sticky top-0 z-10 bg-gray-900/90 backdrop-blur-sm">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="#about" className="title-font font-medium text-white mb-4 md:mb-0">
          <span className="ml-3 text-xl">Michael Li</span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#experience" className="mr-5 hover:text-white">
            Experience
          </a>
          <a href="#projects" className="mr-5 hover:text-white">
            Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#contact" className="mr-5 hover:text-white">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;