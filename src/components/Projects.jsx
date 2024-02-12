// components/Projects.jsx

import { projectData } from "./data.js";

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>
        <span className="text-orange-700">P</span>rojects
      </h2>
      <div className="projects-grid">
        {projectData &&
          projectData.map((project) => (
            <div className="project-card flex-col" key={project.id}>
              <div>
                <img src={project.image} alt="12" className="hover:scale-110" />
              </div>
              <div className="lang-view py-2">
                <div className="project-header flex bg-gray-700 rounded">
                  <i className="fa-regular fa-folder-open folder-icon py-4 px-2"></i>
                  {project.langs.map((lang) => (
                    <i
                      className={`fa-brands fa-${lang} ${lang}-icon py-4 text-3xl`}
                    ></i>
                  ))}
                  <a href={project.gitHubLink}>
                    <i
                      className="fa-brands fa-github text-3xl py-4 px-2 hover:text-amber-300 
					hover:scale-110 translate shadow"
                    ></i>
                  </a>
                </div>
              </div>
              <div className="discription">
                <h3 className="font-bold underline text-lg">{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
