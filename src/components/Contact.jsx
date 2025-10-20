import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="border-b-0">
      <div className="container px-5 py-10 mx-auto text-center">
      <div className="text-center mb-14">
        <h2 className="text-white text-4xl sm:text-5xl font-title">Get In Touch</h2>
      </div>
      <p className="mb-8 text-lg leading-relaxed lg:w-2/3 mx-auto">
        I'm currently seeking opportunities for a Summer 2026 Software Engineering Internship. Please feel free to reach out via email or connect with me on social media!
      </p>
        <div className="flex justify-center items-center space-x-8">
          <a href="https://www.linkedin.com/in/michaaeli/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaLinkedin size={40} />
          </a>
          <a href="https://github.com/michaaeli" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaGithub size={40} />
          </a>
          <a href="mailto:michaael.b.li@gmail.com" className="text-gray-400 hover:text-white"> 
            <FaEnvelope size={40} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;