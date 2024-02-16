// components/Skills.jsx
import { useState } from "react";

const Skills = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleOver = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <div className="skills-container">
        <h2 id="skills-name">
          <span className="text-blue-300">S</span>kills
        </h2>
        <div className="grid-skills">
          <div className="skill-card html">
            <i className="fa-brands fa-html5 html-icon"></i>
            <p>HTML</p>
          </div>
          <div className="skill-card css">
            <i className="fa-brands fa-css3-alt css-icon"></i>
            <p>CSS</p>
          </div>
          <div className="skill-card js">
            <i className="fa-brands fa-js-square js-icon"></i>
            <p>JavaScript</p>
          </div>
          <div className="skill-card react">
            <i className="fa-brands fa-react react-icon"></i>
            <p>React</p>
          </div>
          <div className="skill-card node">
            <i className="fa-brands fa-node-js node-icon"></i>
            <p>Node</p>
          </div>
          <div
            className="skill-card python"
            onMouseOver={handleOver}
            onMouseLeave={handleLeave}
          >
            <i className="fa-brands fa-python python-icon"></i>
            <p>Python</p>
          </div>
          <div className="skill-card java">
            <i className="fa-brands fa-java java-icon"></i>
            <p>Java</p>
          </div>
          <div className="skill-card c">
            <p>C / C++</p>
          </div>
        </div>
      </div>
      {/* if isHovered */}
      {isHovered && (
        <div className="flex items-center justify-center">
          <p className="bg-gray-200 px-8 py-2 text-black rounded-lg text-lg mx-4 ">
            Qiksit
          </p>
          <p className="bg-gray-200 px-8 py-2 text-black rounded-lg text-lg mx-4">
            Qutip
          </p>
          <p className="bg-gray-200 px-8 py-2 text-black rounded-lg text-lg mx-4">
            Django
          </p>
        </div>
      )}
    </div>
  );
};

export default Skills;
