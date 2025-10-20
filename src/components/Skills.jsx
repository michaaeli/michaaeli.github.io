import React from 'react';

const Skills = () => {
    const skills = {
        "Programming Languages": ["Python", "JavaScript", "Java", "HTML", "CSS", "C/C++", "Dart (Flutter)"],
        "Frameworks & Libraries": ["React", "Next.js", "FastAPI", "Flask", "Pandas", "NumPy", "Tailwind CSS", "Open WebUI"],
        "AI & Databases": ["NLP", "LLMs", "Vector Databases", "SQLite", "SQL"], // <-- Comma was missing here
        "Developer Tools": ["Git", "Visual Studio Code", "MacVim"],
    };

  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-12">
        <h2 className="text-white text-4xl sm:text-5xl font-title">Skills & Proficiencies</h2>
        </div>
        <div className="flex flex-wrap -mx-2">
          {Object.keys(skills).map((category) => (
            <div key={category} className="w-full md:w-1/2 p-2">
              <div className="bg-gray-800 rounded p-6 h-full">
                <h3 className="text-xl text-white font-bold mb-4">{category}</h3>
                <div className="flex flex-wrap">
                  {skills[category].map((skill) => (
                    <div key={skill} className="bg-[#4682B4] bg-opacity-40 text-cyan-200 rounded-full px-4 py-1 font-semibold text-md mr-2 mb-2">                      {skill}
                    </div>
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

export default Skills;