// components/Projects.jsx
"use client";

import ApplicationTitle from "./ApplicationTitle.jsx";
import { projectData } from "./data.js";
import React from "react";

const Projects = () => {
  const ref = React.createRef();

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ApplicationTitle myTitle={"Projects"} />
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectData &&
            projectData.map((project) => (
              <div
                className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col"
                key={project.id}
              >
                <div className="p-3">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover shadow translate scale-on-hover-app"
                  />
                </div>
                <div className="px-4 py-2">
                  <div className="flex items-center bg-gray-100 rounded border border-gray-400">
                    <i className="fa-regular fa-folder-open text-gray-500 py-2 px-2"></i>
                    {project.langs.map((lang) => (
                      <i
                        key={lang}
                        className={`fa-brands fa-${lang} text-3xl py-2 px-1 text-gray-800 ml-6`}
                      ></i>
                    ))}
                    {/* GitHub link with Tailwind styles */}
                    <a href={project.gitHubLink} className="ml-auto">
                      <i className="fa-brands fa-github text-3xl py-2 px-2 text-gray-700 hover:text-gray-300 transition-colors duration-300"></i>
                    </a>
                  </div>
                </div>
                <div className="p-4 flex-grow">
                  <h3 className="font-bold underline text-lg mb-2 text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
