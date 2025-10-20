// src/components/Footer.jsx
import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineDocumentText } from "react-icons/hi2";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-gray-400">
      <div className="container mx-auto p-5 flex justify-between items-center">
        <p className="text-sm">© 2025 Michael Li. Built with React & Tailwind CSS.</p>
        <div className="flex items-center space-x-4">
          <a href="https://www.linkedin.com/in/michaaeli/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/michaaeli" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaGithub size={24} />
          </a>
          <a href="/Michael-Li-Resume.pdf" download className="hover:text-white">
            <HiOutlineDocumentText size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;