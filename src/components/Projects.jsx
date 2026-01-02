// src/components/Projects.jsx
import React from 'react';
import { FaGithub } from 'react-icons/fa';

const projectData = [
  {
    title: "Hatchery Website (Project Feta)",
    description: "Architected a secure Django MVT application featuring complex ORM-driven scheduling, a 6-tier Role-Based Access Control system, and a dynamic certification tracking dashboard.",
    technologies: ["Python", "Django", "SQLite", "HTML", "CSS"],
    github: "https://github.com/CSCI3356-Fall2025/Feta",
  },
  {
    title: "Personal Portfolio Website",
    description: "My personal portfolio website designed to showcase my skills, projects, and experiences. Built from scratch with React, Tailwind, and Vite.",
    technologies: ["React", "Tailwind CSS", "Vite", "GitHub Pages"],
    github: "https://github.com/michaaeli/michaaeli.github.io",
  },
  {
    title: "FocusHub",
    description: "A scheduling web application with task creation, organization features, a priority bank for high-importance tasks, and a leftover bank for previously uncompleted tasks.",
    technologies: ["HTML", "Tailwind CSS", "React", "Next.js", "Firebase", "Clerk"],
    github: "https://github.com/michaaeli/optimized-schedule",
  },
  {
    title: "FitConnect App",
    description: "A fitness app which enabled users to create exercise plans and interact with others through posts. Integrated Google Firebase for user authentication and a database that could store over 1,000 users.",
    technologies: ["Dart", "Flutter", "Firebase"],
    github: "https://github.com/michaaeli/fluttercode",
  },
  {
    title: "Scale Counselor",
    description: "A website with a Python algorithm to generate meal plans based on user weight goals and smart scale data, integrating a Flask server for sub-200ms data processing.",
    technologies: ["JSON", "HTML", "CSS", "Flask", "APIs"],
    github: "https://github.com/michaaeli/scalecounselor",
  },
];

const Projects = () => {
  return (
    <section id="projects">
       <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl sm:text-5xl font-title">Personal Projects</h2>
        </div>
        {/* Updated flex container for grid layout */}
        <div className="flex flex-wrap -m-4">
          {projectData.map((project, index) => (
            // This div makes each project a grid item
            <div key={index} className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                <div className="flex justify-between items-center mb-3">
                    <h3 className="text-white text-2xl font-bold">{project.title}</h3>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                        <FaGithub size={28} />
                    </a>
                </div>
                <p className="leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap">
                    {project.technologies.map((tech, i) => (
                        <span key={i} className="bg-[#4682B4] bg-opacity-40 text-cyan-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">{tech}</span>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;