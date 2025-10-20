// src/components/Experience.jsx
import React from 'react';
import { FiExternalLink } from 'react-icons/fi'; // Import the link icon

const experienceData = [
  {
    role: "AI Application Developer",
    company: "Life Tech",
    date: "May 2025 - October 2025",
    description: "Co-designed and developed a FastAPI-based Health Activity Logging API integrated with Open WebUI and Ollama, converting natural language inputs into structured records to help targeted elderly users track and improve their health.",
    technologies: ["Python", "FastAPI", "Open WebUI", "Ollama", "SQLite", "NLP"],
    link: "https://lifewell.tech/"
  },
  {
    role: "IT Technology Consultant",
    company: "Boston College",
    date: "August 2025 - Present",
    description: "Provide software and hardware support for over 100+ faculty members, students, and staff at Boston College.",
    technologies: ["Hardware Support", "Software Troubleshooting", "Customer Service"],
    link: "https://www.bc.edu/content/bc-web/offices/its/about/ocio.html"
  },
  {
    role: "LIDAR Research Project Intern",
    company: "University of Pittsburgh",
    date: "May 2024 - August 2024",
    description: "Developed algorithms to convert local LIDAR coordinates to global WGS84 lat/lon coordinates. Leveraged RESTful API design principles with JavaScript, React, and Python, facilitating real-time data extraction from LIDAR systems.",
    technologies: ["Python", "JavaScript", "React", "RESTful APIs", "LIDAR Data Processing"],
    link: "https://github.com/michaaeli/lidar-contributions"
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl sm:text-5xl font-title">Work Experience</h2>
        </div>
        <div className="flex flex-wrap -m-4">
          {experienceData.map((exp, index) => (
            <div key={index} className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                {exp.link ? (
                  <a href={exp.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-x-2 mb-3">
                    <p className="font-bold text-xl text-white hover:underline">{exp.role}</p>
                    <FiExternalLink className="text-gray-400" />
                  </a>
                ) : (
                  <p className="leading-relaxed mb-3 font-bold text-xl text-white">{exp.role}</p>
                )}
                <div className="flex justify-between items-center mb-4">
                    <p className="text-lg text-cyan-200">{exp.company}</p>
                    <p className="text-sm text-gray-500">{exp.date}</p>
                </div>
                <p className="leading-relaxed mb-6">{exp.description}</p>
                <div className="flex flex-wrap">
                    {exp.technologies.map((tech, i) => (
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

export default Experience;