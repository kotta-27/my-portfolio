import React, { useState, useEffect, useRef } from "react";

const Skills = () => {
  const [isHoveredPython, setIsHoveredPython] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  const handleOverPython = () => setIsHoveredPython(true);
  const handleLeavePython = () => setIsHoveredPython(false);

  const underlineStyle = {
    position: "absolute",
    bottom: "-5px",
    left: "0",
    width: "100%",
    height: "3px",
    backgroundColor: "currentColor", // Tailwind's blue-300
    transform: "scaleX(0)",
    transformOrigin: "left",
    transition: "transform 1.5s ease-out",
  };

  return (
    <div>
      <div className="skills-container">
        <div
          ref={titleRef}
          className={`relative inline-block transition-all duration-1000 transform ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full"
          }`}
        >
          <h2
            id="skills-name"
            className="text-4xl mb-2"
            style={{ position: "relative" }}
          >
            <span className="text-blue-300 inline-block transition-all duration-300 transform hover:scale-110">
              S
            </span>
            <span className="inline-block transition-all duration-300 transform hover:scale-110">
              k
            </span>
            <span className="inline-block transition-all duration-300 transform hover:scale-110">
              i
            </span>
            <span className="inline-block transition-all duration-300 transform hover:scale-110">
              l
            </span>
            <span className="inline-block transition-all duration-300 transform hover:scale-110">
              l
            </span>
            <span className="inline-block transition-all duration-300 transform hover:scale-110">
              s
            </span>
            <span
              style={{
                ...underlineStyle,
                transform: isVisible ? "scaleX(1)" : "scaleX(0)",
              }}
            />
          </h2>
        </div>
        <div className="grid-skills">
          {/* Skill cards remain unchanged */}
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
            onMouseOver={handleOverPython}
            onMouseLeave={handleLeavePython}
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
          <div className="skill-card flutter">
            <p>flutter(勉強中)</p>
          </div>
        </div>
      </div>
      {/* {isHoveredPython && (
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
      )} */}
    </div>
  );
};

export default Skills;
