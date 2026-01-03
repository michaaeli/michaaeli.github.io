import React from 'react';
import profilePic from '../assets/profile-pic.JPG';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="text-4xl sm:text-5xl mb-4 font-extrabold text-white">
          Hi, I'm Michael Li.
        </h1>
        <p className="mb-4 leading-relaxed">
          I'm currently a Junior at Boston College majoring in Computer Science and minoring in Finance. I’m passionate about building robust, data-driven full stack applications as well as exploring the AI/ML space.
        </p>
        <p className="mb-8 leading-relaxed">
          I have technical experience across the full stack (Python, Java, JavaScript, React, Next.js, and Dart/Flutter) and possess knowledge in Natural Language Processing (NLP), Large Language Models (LLMs), and RESTful API design. In my free time, I enjoy going to the beach, fashion, running, and video games. For more on my experiences and skills, check out the rest of the website below!
        </p>
        <div className="flex justify-center items-center">
          <a href="https://www.linkedin.com/in/michaaeli/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mr-5">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/michaaeli" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mr-5">
            <FaGithub size={30} />
          </a>
           <a href="/Michael-Li-Resume.pdf" download className="inline-flex text-white bg-[#13a8da] border-0 py-2 px-6 focus:outline-none hover:bg-[#1E90FF] rounded text-lg">
            Download Resume
          </a>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          className="object-cover object-center rounded-full mx-auto"
          alt="Michael Li"
          src={profilePic}
        />
      </div>
    </section>
  );
};

export default About;