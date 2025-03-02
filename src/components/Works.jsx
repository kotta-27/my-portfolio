// components/Projects.jsx
"use client";

import ApplicationTitle from "./ApplicationTitle.jsx";
import { projectDataJa, projectDataEn } from "./data.js";
import React from "react";
import { useLanguage } from '../contexts/LanguageContext';


const Works = () => {
  const ref = React.createRef();
  const { language } = useLanguage();

  let projectData;
  if (language === "ja") {
    projectData = projectDataJa;
  } else {
    projectData = projectDataEn;
  }

  // 言語に応じたアイコンのマッピング
  const iconMapping = {
    react: ["devicon-react-original colored", "#61DAFB"],
    nextjs: ["devicon-nextjs-plain colored", "#000000"],
    tailwind: ["devicon-tailwindcss-plain colored", "#38BDF8"],
    python: ["devicon-python-plain colored", "#306998"],
    js: ["devicon-javascript-plain colored", "#F0DB4F"],
    java: ["devicon-java-plain colored", "#007396"],
    unity: ["devicon-unity-plain colored", "#000000"],
    c: ["devicon-c-plain colored", "#555555"],
    cpp: ["devicon-cplusplus-plain colored", "#00599C"],
    csharp: ["devicon-csharp-plain colored", "#239120"],
    django: ["devicon-django-plain colored", "#092E20"],
    html: ["devicon-html5-plain colored", "#E34F26"],
    css: ["devicon-css3-plain colored", "#1572B6"],
    postgres: ["devicon-postgresql-plain colored", "#336791"],
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ApplicationTitle myTitle={"Works"} />
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
                    <div className="flex mx-auto">
                      {project.langs.map((lang) => (
                        <i
                          key={lang}
                          className={`${iconMapping[lang]?.[0]} text-2xl py-2 px-1 ml-2 mr-2`}
                          style={{ color: iconMapping[lang]?.[1] }}
                        ></i>
                      ))}
                      <a href={project.gitHubLink} className="ml-auto" target="_blank">
                        {/* <i className="devicon-github-original text-xl py-2 px-2 text-gray-700 hover:text-gray-300 transition-colors duration-300"></i> */}
                      </a>
                    </div>
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

export default Works;
